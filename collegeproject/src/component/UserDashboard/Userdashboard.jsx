import React, { useEffect, useState } from 'react'
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

    const { userDashboard } = useSelector((state) => state.admin);
    const eventDates = userDashboard.map(item => item.date);

    //const todaysDate = new Date().toLocaleDateString();

    // const formattedEventDates = eventDates.map(date => new Date(date).toLocaleDateString());
    // //const currentDate = formattedEventDates.filter(item => item === todaysDate);

    // const futureDates = formattedEventDates.filter(date => new Date(date) >= new Date());
    // const pastDates = formattedEventDates.filter(date => new Date(date) < new Date());

    // //console.log("Current Date:", currentDate);
    // console.log("Future Dates:", futureDates);
    // console.log("Past Dates:", pastDates);


    const currentDate = new Date().toLocaleDateString();

    const formattedEventDates = eventDates.map(date => new Date(date).toLocaleDateString());
    const filteredDates = formattedEventDates.filter(item => item === currentDate);
    console.log("filteredDates", filteredDates)
    const extractedValue = filteredDates[0];
    console.log("extractedValue", extractedValue);


    const ispast = currentDate > extractedValue;
    console.log("ispast", ispast)
    //present date
    //const currentDate = new Date().toLocaleDateString();

    /*const currarr = []
    currarr.push(currentDate);
    const [firstDateDestructured] = currarr;
    const isCurrentDatePresent = eventDates.includes(firstDateDestructured);


    const date=eventDates.filter(item=>item===currentDate)*/

    console.log("userDashboard", userDashboard)

    console.log("Event date", eventDates);

    // console.log("current date", currentDate);

    // console.log("current date array", currarr);

    // console.log("firstDateDestructured", firstDateDestructured);

    // console.log("filterdate", isCurrentDatePresent);








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

            </div>
        </>
    )
}

export default Userdashboard