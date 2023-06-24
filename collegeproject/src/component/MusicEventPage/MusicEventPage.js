import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eventdetails } from '../../feature/eventSlice';
import Secondnavbar from '../nav/Secondnavbar';
import { BsCurrencyRupee } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { AiFillCalendar } from 'react-icons/ai';
import axios from 'axios';
import '../MusicEventPage/MusicEventPage.scss';
import { musicEventDetails } from '../utils/musicEvent';
import PropagateLoader from "react-spinners/PropagateLoader";
function MusicEventPage() {
    let [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([])
    const dispatch = useDispatch();

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
    const sendEventData = (eventid) => {
        const selectedShow = events.filter((event, index) => event.event_id === eventid);
        dispatch(eventdetails(selectedShow));
    };


    return (
        <>
            {
                loading ?
                    <div className='loaderWrapper'>

                        <PropagateLoader
                            color="#da22ff"
                            loading
                            size={27}
                            speedMultiplier={1.1}
                        />
                    </div>
                    :
                    <div className="musicEvent">
                        <div className="navbar">
                            <Secondnavbar />
                        </div>
                        <div className="categoryTitle">
                            <h1>Ignite Your Passion for Music</h1>
                        </div>
                        <div className="allMusicEventcards">
                            {events.map((musicEvent, index) => {
                                return (
                                    <Link to={`/EventDetailsPage/${musicEvent.eventName}`} key={index}>
                                        <div
                                            className="card"
                                            onClick={() => sendEventData(musicEvent.event_id)}
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
                                                <div className="title">{musicEvent.eventName}</div>
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
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <button >Add New Event</button>
                    </div>
            }
        </>
    );
}

export default MusicEventPage;
