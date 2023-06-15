import React from 'react'
import "../UserDashboard/Userdashboard.scss"
import { FaUserCircle } from "react-icons/fa";
import user from "../../Images/user.png"
import "../MusicEventPage/MusicEventPage.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCurrencyRupee } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";
function Userdashboard() {
    const { wishListEvent } = useSelector((state) => state.eventDetails);
    return (
        <>
            <div className="userdashboard">

                <div className="userBanner">
                    <div className="avatar">
                        <div className="user">

                            <img src={user} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="info">
                        <div className="up">
                            <div className="left">

                                <span>First Name:</span>
                                <span>Sudipta </span>
                            </div>
                            <div className="right">
                                <span>Last Name:</span>
                                <span>Mukherjee </span>

                            </div>
                        </div>
                        <div className="middel">
                            <div className="left">
                                <span>Email:</span>
                                <span>sudiptamukherjee112@gmail.com</span>

                            </div>
                            <div className="right">
                                <span>Phone No:</span>
                                <span>3928392839</span>

                            </div>
                        </div>
                        <div className="down">
                            <div className="left">
                                <button>Booked Events</button>

                            </div>
                            <div className="right" >
                                <button>Wishlist Events</button>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="musicEvent">
                    <div className="allMusicEventcards" >
                        {
                            wishListEvent.map((musicEvent, id) => {
                                return (
                                    <Link>

                                        <div className="card">

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
            </div>
        </>
    )
}

export default Userdashboard