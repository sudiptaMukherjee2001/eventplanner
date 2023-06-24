// Music Details page er design sob category er details page lagano hoyeche

import React, { useEffect, useState } from 'react'
import "../MusicDetailsPage/MusicDetailsPage.scss"
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCalendar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { IoIosClock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";
import { wishEvent } from "../../feature/eventSlice"
import Secondnavbar from "../nav/Secondnavbar"
import "../BookingForm/BookingForm.scss"
import { userDashboard } from "../../feature/Adminslice"

function MusicDetailsPage() {
    const [toggelFirstQue, setToggelFirstQue] = useState(true)
    const [toggelSecondQue, setToggelSecondQue] = useState(true)
    const [toggelThirdQue, setToggelThirdQue] = useState(true)
    const [toggelFourthQue, setToggelFourthQue] = useState(true)
    const [BookingFormOpen, setBookingFormOpen] = useState(false)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handelTogggelFirst = () => {

        setToggelFirstQue(!toggelFirstQue);
        setToggelSecondQue(true);
        setToggelThirdQue(true);
        setToggelFourthQue(true)

    }
    const handelTogggelSecond = () => {
        setToggelFirstQue(true);
        setToggelSecondQue(!toggelSecondQue);
        setToggelThirdQue(true);
        setToggelFourthQue(true)

    }
    const handelTogggelThird = () => {
        setToggelFirstQue(true);
        setToggelSecondQue(true)
        setToggelThirdQue(!toggelThirdQue);
        setToggelFourthQue(true)

    }
    const handelTogggelFourth = () => {
        setToggelFirstQue(true);
        setToggelSecondQue(true);
        setToggelThirdQue(true)
        setToggelFourthQue(!toggelFourthQue);


    }
    const [number, setNumber] = useState(0);



    //Handel ticket Qty button
    const handelDecrement = () => {
        if (number <= 0) {
            setNumber(0)
        }
        else {

            const decrementNumber = number - 1;
            setNumber(decrementNumber);
            console.log(decrementNumber)
        }
    }
    const handelIncrement = () => {

        if (number < 1000) {

            const incrementNumber = number + 1;
            setNumber(incrementNumber)
        }
    }
    // console.log(number)

    const { initialEvent, wishListEvent } = useSelector((state) => state.eventDetails);

    const alldetails = initialEvent.map(item => item);

    console.log("it it si title", alldetails[0]?.title)

    // send booking details to  redux

    const [state_variable_title, setTitle] = useState(alldetails[0]?.eventName);
    const [state_variable_date, setDate] = useState(alldetails[0]?.date);
    const [state_variable_Time, setTime] = useState(alldetails[0]?.time);
    const [state_variable_price, setprice] = useState('');
    const [state_variable_location, setlocation] = useState(alldetails[0]?.location);
    const [state_variable_guest_num, setguestnum] = useState(number);
    const [state_variable_Contact_name, setContactname] = useState('');
    const [state_variable_email, setemail] = useState('');
    const [state_variable_phoneNumber, setPhonenum] = useState('');

    const [store, setStore] = useState()

    const handelname = (e) => {
        const username = e.target.value;
        setContactname(username)
    }

    const handelEmail = (e) => {
        const userEmail = e.target.value;
        setemail(userEmail);
    }

    const handelPhnum = (e) => {
        const userphonenum = e.target.value;
        setPhonenum(userphonenum);
    }


    useEffect(() => {
        const newEvent = {
            eventName: state_variable_title,
            date: state_variable_date,
            time: state_variable_Time,
            // price: state_variable_price,
            location: state_variable_location,
            Comtactname: state_variable_Contact_name,
            email: state_variable_email,
            phnum: state_variable_phoneNumber
        };

        setStore(newEvent)
    }, [])


    const handelStore = () => {



        dispatch(userDashboard(store))

    }

    // ------------------------------------------
    const handelmodalon = () => {
        setBookingFormOpen(true)
    }
    const handelModalOff = () => {
        setBookingFormOpen(false)
    }
    // const sendWishListEvent = (id) => {

    //     const ListfavEvent = initialEvent.find(item => item?.id === id)

    //     dispatch(wishEvent(ListfavEvent));
    // }
    return (
        <>
            <div className="MusicDetailsPage">
                <div className="navbar">
                    <Secondnavbar />
                </div>
                <div className="musicRelatedContent">
                    {
                        initialEvent.map((event, id) => {
                            return (
                                <div className="leftContent" key={id}>
                                    <div className="title">
                                        {event.eventName}
                                    </div>
                                    <div className="img">
                                        <img
                                            src={`http://localhost:8800/${event.imageUrl}`}
                                            alt=""
                                            srcSet=""
                                        />
                                    </div>
                                    <div className="eventInfo">
                                        <div className="eventDate">
                                            <div className="icon">
                                                <AiOutlineCalendar />
                                            </div>
                                            <div className="dateinfo">
                                                <h3>
                                                    Event Date:
                                                </h3>
                                                <p>

                                                    {event.date}
                                                </p>

                                            </div>

                                        </div>
                                        <div className="eventTime">
                                            <div className="icon">
                                                <AiOutlineClockCircle />
                                            </div>
                                            <div className="timeInfo">
                                                <h3>
                                                    Event Time:
                                                </h3>
                                                <p>

                                                    {event.time}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="eventLocation">
                                            <div className="icon">
                                                <GoLocation />
                                            </div>
                                            <div className="locationInfo">
                                                <h3>
                                                    Event Location:
                                                </h3>
                                                <p>

                                                    {event.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="RegisterSection">
                                        <h2>Register Now : </h2>
                                        <div className="registerinfo">
                                            <div className="TicketType">
                                                <div className="header">
                                                    <span>
                                                        Ticket type:
                                                    </span>
                                                </div>
                                                <div className="details">
                                                    <span>
                                                        Adults
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="TicketQty">
                                                <div className="header">
                                                    Ticket Qty:
                                                </div>
                                                <div className="details">
                                                    <div className="btn">
                                                        <span className='minus' onClick={handelDecrement}>
                                                            -
                                                        </span>
                                                        <p>
                                                            {number >= 0 ? number : 0}
                                                        </p>
                                                        <span className='plus' onClick={handelIncrement}>
                                                            +
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="TicketPrice">
                                                <div className="header">
                                                    Per Ticket Price
                                                </div>
                                                <div className="details">
                                                    <FaRupeeSign /> {event.price}.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="totalBill">
                                            <div className="total">
                                                Total
                                                <span>
                                                    <FaRupeeSign /> {event.price * number}.00
                                                </span>

                                            </div>
                                            <div className="paybutton">
                                                <button onClick={handelmodalon}>
                                                    Register For this Event
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                    <div className="rightContent">
                        <div className="seatNumber">
                            Total seat : <span>{1000 - number}</span> left
                        </div>
                        <div className="organizerDetails">
                            <div className="title">
                                <CgOrganisation className='OrganizerIcon' />
                                <span>
                                    By :
                                </span>
                                Family Startup pvt.ltd
                            </div>
                            {
                                initialEvent.map((event) => {
                                    return (

                                        <div className="place">
                                            <div className="first">
                                                <BsFillArrowRightCircleFill className='icon' />
                                                {event.eventName}
                                            </div>
                                            <div className="second">

                                                <BsFillArrowRightCircleFill className='icon' />
                                                {event.location}

                                            </div>
                                            <div className="third">
                                                <BsFillArrowRightCircleFill className='icon' />
                                                {event.date}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="schedule">
                                <div className="title">
                                    <AiFillCalendar />

                                    <span>
                                        Event Schedule details
                                    </span>

                                </div>
                                {
                                    initialEvent.map((event) => {
                                        return (
                                            <div className="showtime">
                                                <IoIosClock className='icon' />
                                                {event.time}

                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="starIcon">
                            <button>
                                add to cart

                            </button>
                        </div>
                    </div>
                </div>
                {
                    BookingFormOpen &&
                    <div className='Bookingform'>

                        <div className="header">
                            <div className="title">
                                <h2>

                                    Registration Form
                                </h2>
                            </div>
                            <RxCross2 onClick={handelModalOff} className='CrossIcon' />
                        </div>
                        <div className="eventDetails">
                            <div className="left">
                                <label htmlFor="eventName">
                                    Event Name:

                                    <input type="text" value={state_variable_title} name="" id="" />
                                </label>
                                <label htmlFor="eventDate">
                                    Date:
                                    <input type="text" value={state_variable_date} name="" id="" />
                                </label>
                                <label htmlFor="eventTime">
                                    Time:
                                    <input type="text" value={state_variable_Time} name="" id="" />
                                </label>
                                <label htmlFor="eventName">
                                    Number of Guests:
                                    <input type="text" value={number} name="" id="" />
                                </label>
                                <label htmlFor="Location">
                                    Amount:
                                    <input type="text" value={`${alldetails[0]?.price * number}`} name="" id="" />
                                </label>
                            </div>
                            <div className="right">



                                <label htmlFor="Location">
                                    Location:
                                    <input type="text" value={state_variable_location} name="" id="" />
                                </label>
                                <label htmlFor="userName">
                                    Contact name:
                                    <input type="text" name="" id="" value={state_variable_Contact_name} onChange={handelname} />
                                </label>
                                <label htmlFor="email">
                                    Email:
                                    <input type="email" name="" id="" value={state_variable_email} onChange={handelEmail} />
                                </label>
                                <label htmlFor="pno">
                                    Phone Number:
                                    <input type="tel" name="" id="" value={state_variable_phoneNumber} onChange={handelPhnum} />

                                </label>
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={handelStore} >
                                Book
                            </button>
                        </div>


                    </div>
                }
                <div className="detailspagefaq">

                    <div className="top">

                        <div className="title">
                            FAQ
                        </div>
                        <div className="header">
                            Frequently Asked Questions about our Event Planner
                        </div>

                    </div>
                    <div className="allFaq">

                        <div className="que_ans" onClick={handelTogggelFirst}>
                            <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>


                                What is the event planner web app?
                                {toggelFirstQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                            </div>
                            <div className={toggelFirstQue ? "ans" : "ans-active"}>
                                The event planner web app is an online platform that helps you plan and manage various types of events. It provides tools and features to streamline the event planning process and ensure a successful event.
                            </div>

                        </div>
                        <div className="que_ans" onClick={handelTogggelSecond}>
                            <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>
                                How can I use the event planner web app?
                                {toggelSecondQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                            </div>
                            <div className={toggelSecondQue ? "ans" : "ans-active"}>
                                To use the event planner web app, you can simply visit our website and create an account. Once you're signed in, you can search an event and booked your event ..
                            </div>

                        </div>
                        <div className="que_ans" onClick={handelTogggelThird}>
                            <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>
                                Can I customize event details and branding
                                {toggelThirdQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                            </div>
                            <div className={toggelThirdQue ? "ans" : "thirdfaq"}>
                                Sorry,this facillity is not availabel right now..
                            </div>

                        </div>
                        <div className="que_ans" onClick={handelTogggelFourth}>
                            <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>


                                How can I get support if I encounter any issues?
                                {toggelFourthQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                            </div>
                            <div className={toggelFourthQue ? "ans" : "ans-active"}>
                                If you have any issues or need assistance, our customer support team is here to help. You can reach out to us through the contact form on our website or access our comprehensive knowledge base for self-help resources.
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default MusicDetailsPage