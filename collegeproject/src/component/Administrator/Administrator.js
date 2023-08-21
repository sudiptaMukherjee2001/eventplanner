// administrator dashboard
import React, { useEffect, useState } from 'react'
import { AiFillCalendar } from 'react-icons/ai';
import { BsCurrencyRupee } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import axios from 'axios';
import "../Administrator/Administrator.scss"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import Administornav from '../nav/Administornav';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
function Administrator() {
    const [event, setEvent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        //data fetch from database
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8800/events');
                console.log(response.data); // Log the fetched data to the console

                setEvent(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    const handleApprove = async (event_id) => {
        // approved event
        var templateParams = {
            user_email: localStorage.getItem("userEmail"),
            message: 'Your Event is Approved',
            from_name: "Evento Admin"


        };

        emailjs.send('service_a05ds19', 'template_cajgdl2', templateParams, 'f-xebNGuBIf6zPFl1')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        navigate("/approvedEvents")
        try {
            await axios.patch(`http://localhost:8800/admin/${event_id}`, {
                // Request body if needed
            });
            // Request was successful
            console.log('Event approved:', event_id);


        } catch (error) {
            // Request failed
            console.error('Error approving event:', error);
        }
    };


    const handleDelete = async (event_id) => {
        try {
            await axios.delete(`http://localhost:8800/admin/${event_id}`, {
                // Request body if needed
            });
            // Request was successful
            console.log('Event Deleted:', event_id);
            window.location.reload();


        } catch (error) {
            // Request failed
            console.error('Error approving event:', error);
        }
    };




    return (
        <>
            <Administornav />
            <div className="AdministratorApprovePage">

                <h1>
                    Admin Dashboard
                </h1>
                <div className="allEventcards">
                    {event.map((musicEvent, index) => {
                        if (!musicEvent.approved) {
                            return (
                                <div
                                    className="card"
                                // onClick={() => sendEventData(musicEvent.event_id)}
                                >
                                    <div className="imagesection">
                                        <img
                                            src={`http://localhost:8800/${musicEvent.imageUrl}`}
                                            alt=""
                                            srcSet=""
                                        />
                                        {/* <div className="date">
                                            <ul>
                                                <li>{musicEvent.date}</li>
                                                <li>{musicEvent.mon}</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="title_Price">
                                        <div className="title">{musicEvent.eventname}</div>
                                        <div className="price">
                                            <span>
                                                Price Starts from :<BsCurrencyRupee className='rsIcon' /> {musicEvent.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <ImLocation className='locationIcon' />
                                        <span>
                                            Location: {musicEvent.location}
                                        </span>
                                    </div>
                                    <div className="timming">
                                        <AiFillCalendar className='cal' />
                                        <span>{musicEvent.time}</span>
                                    </div>
                                    <div className="buttonGroup">
                                        <Button
                                            variant="outlined"
                                            startIcon={<VerifiedSharpIcon />}
                                            style={{
                                                border: "1.9px solid rgb(65 193 35)",
                                                backgroundColor: "rgb(65 193 35)",
                                                color: "rgb(255 255 255)"
                                            }}
                                            onClick={() => handleApprove(musicEvent.event_id)}
                                        >
                                            Approve
                                        </Button>
                                        <Button onClick={() => handleDelete(musicEvent.event_id)} variant="outlined" startIcon={<DeleteIcon />} style={{ border: "1.9px solid  rgb(201 0 0)", backgroundColor: " rgb(201 0 0)", color: " rgb(255 255 255)" }}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}


                </div>
            </div>
        </>
    )
}

export default Administrator