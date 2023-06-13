import React from 'react'
import "../FeatureEvent/Featureevent.scss"
import { feature } from '../utils/featureEvent'
import { BsCurrencyRupee } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";

function FeatureEvent() {
    return (
        <div className="featureEventSection">

            {
                feature.map((event) => {
                    return (

                        <div className="card">
                            <div className="imagesection">
                                <img src={event.img} alt="" srcset="" />
                                <div className="date">
                                    <ul>
                                        <li>{event.date}</li>
                                        <li>{event.mon}</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="title_Price">
                                <div className="title">

                                    {event.title}
                                </div>
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
                    )
                })
            }
        </div>
    )
}

export default FeatureEvent