import React, { useEffect, useState } from 'react'
import { AiFillCalendar } from 'react-icons/ai';
import { BsCurrencyRupee } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Administornav from '../nav/Administornav';
import "../Administrator/ApprovedEvent.scss"
import axios from 'axios';
import PageLoader from '../PageLoader/PageLoader';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import Administornav from '../nav/Administornav';

function ApprovedEvents() {
    let [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([])
    // const dispatch = useDispatch();

    //loader

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            //data fetch from database
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:8800/events');
                    console.log(response.data); // Log the fetched data to the console

                    setEvents(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, 2000)

    }, []);
    //send perticular choosed event to my redux
    // const sendEventData = (eventid) => {
    //     const selectedShow = events.filter((event, index) => event.event_id === eventid);
    //     dispatch(eventdetails(selectedShow));
    // };


    //emailjs
    const handleDelete = async (event_id) => {
        window.location.reload();
        try {
            await axios.delete(`http://localhost:8800/admin/${event_id}`, {
                // Request body if needed
            });
            // Request was successful
            console.log('Event Deleted:', event_id);

        } catch (error) {
            // Request failed
            console.error('Error approving event:', error);
        }
    };

    return (
        <>
            {
                loading ?
                    <div className='loaderWrapper'>

                        {/* <PropagateLoader
                            color="#da22ff"
                            loading
                            size={27}
                            speedMultiplier={1.1}
                        /> */}
                        <PageLoader />
                    </div>
                    :
                    <div className="Event">
                        <div className="navbar">
                            <Administornav />
                        </div>

                        <div className="allEventcards">
                            {events.map((musicEvent, index) => {
                                return (
                                    musicEvent.approved &&

                                    <Link key={index}>
                                        <div
                                            className="card"

                                        >
                                            <div className="imagesection">
                                                <img
                                                    src={`http://localhost:8800/${musicEvent.imageUrl}`}
                                                    alt=""
                                                    srcSet=""
                                                    width=' 140'
                                                    height='196 '
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
                                            <Button onClick={() => handleDelete(musicEvent.event_id)} variant="outlined" startIcon={<DeleteIcon />} style={{ border: "1.9px solid  rgb(201 0 0)", backgroundColor: " rgb(201 0 0)", color: " rgb(255 255 255)" }}>
                                                Delete
                                            </Button>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                    </div>
            }
        </>
    );
}

export default ApprovedEvents