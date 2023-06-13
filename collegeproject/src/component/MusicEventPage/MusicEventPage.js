import React from 'react'
import "../MusicEventPage/MusicEventPage.scss"
import { Link } from 'react-router-dom'
import { musicEventDetails } from "../utils/musicEvent"
import { BsCurrencyRupee } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";

import { useDispatch } from "react-redux"
import { eventdetails } from '../../feature/eventSlice';
function MusicEventPage() {

    const dispatch = useDispatch();

    const sendEventData = (id) => {
        const selectedShow = musicEventDetails.filter((event) => event.id === id)

        dispatch(eventdetails(selectedShow))
    }


    return (
        <>
            <div className="musicEvent">
                <div className="navbar">
                    Music Event page
                </div>
                <div className="categoryTitle">
                    <h1> Music</h1>
                </div>
                <div className="allMusicEventcards">
                    {
                        musicEventDetails.map((musicEvent, id) => {
                            return (
                                <Link to={`/EventDetailsPage/${musicEvent.title}`}>

                                    <div className="card" key={id} onClick={() => sendEventData(id)}>

                                        <div className="imagesection">
                                            <img src={musicEvent.img} alt="" srcset="" />
                                            <div className="date">
                                                <ul>
                                                    <li>{musicEvent.date}</li>
                                                    <li>{musicEvent.mon}</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="title_Price">
                                            <div className="title">

                                                {musicEvent.title}
                                            </div>
                                            <div className="price">
                                                <span>

                                                    Price Starts from :<BsCurrencyRupee className='rsIcon' /> {musicEvent.price}
                                                </span>
                                            </div>

                                        </div>
                                        <div className="location">
                                            <ImLocation className='locationIcon' />
                                            <span>

                                                Location : {musicEvent.Location}
                                            </span>

                                        </div>

                                        <div className="timming">
                                            <AiFillCalendar className='cal' />
                                            <span>
                                                {musicEvent.timming}
                                            </span>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default MusicEventPage