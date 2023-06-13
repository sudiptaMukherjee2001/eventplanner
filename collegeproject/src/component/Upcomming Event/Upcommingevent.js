import React, { useRef, useState } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";
import { upcommingEvents } from "../utils/Upcommingevent";
import "../Upcomming Event/Upcommingevent.scss";
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
function Upcommingevent() {
    // 

    const prevEvent = () => {

    };

    const nextEvent = () => {

    };

    return (
        <>
            <div className="upcommingEventSection">
                <BiChevronLeftCircle onClick={prevEvent} className='leftMove' />

                <div className="allcard">
                    {upcommingEvents.map((event, index) => (
                        <div className="card" key={index}>
                            <div className="imagesection">
                                <img src={event.img} alt="" srcSet="" />
                                <div className="date">
                                    <ul>
                                        <li>{event.date}</li>
                                        <li>{event.mon}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="title_Price">
                                <div className="title">{event.title}</div>
                                <div className="price">
                                    <span>
                                        Price Starts from :<BsCurrencyRupee className='rsIcon' /> {event.price}
                                    </span>
                                </div>
                            </div>
                            <div className="location">
                                <ImLocation className='locationIcon' />
                                <span>
                                    Location : {event.Location}
                                </span>
                            </div>
                            <div className="timming">
                                <AiFillCalendar className='cal' />
                                <span>
                                    {event.timming}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <BiChevronRightCircle onClick={nextEvent} className='rightMove' />
            </div>
        </>
    );
}

export default Upcommingevent;
