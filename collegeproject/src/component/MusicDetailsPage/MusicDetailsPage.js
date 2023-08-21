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
// import { AiOutlineStar } from "react-icons/ai";
// import { wishEvent } from "../../feature/eventSlice"
import Musicdetailspagenavbar from "../nav/Musicdetailspagenavbar"
import "../BookingForm/BookingForm.scss"
import { userDashboard } from "../../feature/Adminslice"
import { bookedGuest } from "../../feature/eventSlice"
import PageLoader from '../PageLoader/PageLoader';
import axios from "axios";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function MusicDetailsPage() {
    const [toggelFirstQue, setToggelFirstQue] = useState(true)
    const [toggelSecondQue, setToggelSecondQue] = useState(true)
    const [toggelThirdQue, setToggelThirdQue] = useState(true)
    const [toggelFourthQue, setToggelFourthQue] = useState(true)
    const [BookingFormOpen, setBookingFormOpen] = useState(false)
    let [loading, setLoading] = useState(false);
    const [numbe, setNumber] = useState(0);

    const [guestForMusicEvent, setguestForMusicEvent] = useState(false)
    const [guestForExhibitionEvent, setguestForExhibitionEvent] = useState(false)
    const [guestForOnlineEvent, setguestForOnlineEvent] = useState(false)
    const [guestForpartyEvent, setguestForpartyEvent] = useState(false)

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




    //Handel ticket Qty button
    const handelDecrement = () => {
        if (numbe <= 0) {
            setNumber(0)
        }
        else {

            const decrementNumber = numbe - 1;
            setNumber(decrementNumber);
            console.log(decrementNumber)
        }
    }
    const handelIncrement = () => {

        if (numbe < 1000) {

            const incrementNumber = numbe + 1;
            setNumber(incrementNumber)
        }
    }
    // console.log(number)

    const { initialEvent, wishListEvent } = useSelector((state) => state.eventDetails);
    const totalnumberOfbooking = useSelector((state) => state.eventDetails.numberOfGuest);

    const alldetails = initialEvent.map(item => item);
    const eventDetails = initialEvent[0];
    console.log("it it si title", alldetails[0]?.title)

    // send booking details to  redux

    const [state_variable_title, setTitle] = useState(alldetails[0]?.eventname);
    const [state_variable_date, setDate] = useState(alldetails[0]?.date);
    const [state_variable_Time, setTime] = useState(alldetails[0]?.time);
    const [state_variable_price, setprice] = useState(eventDetails?.price);
    const [state_variable_location, setlocation] = useState(alldetails[0]?.location);
    const [state_variable_guest_num, setguestnum] = useState(numbe);
    const [state_variable_Contact_name, setContactname] = useState('');
    const [state_variable_email, setemail] = useState('');
    const [state_variable_phoneNumber, setPhonenum] = useState('');

    const [store, setStore] = useState()

    const handelname = (e) => {

        // const username = ;
        setContactname(e.target.value)

    }

    const handelEmail = (e) => {

        // const userEmail = ;
        setemail(e.target.value);
    }

    const handelPhnum = (e) => {

        // const userphonenum = ;
        setPhonenum(e.target.value);
    }


    useEffect(() => {
        setLoading(true)
        const newEvent = {
            eventname: state_variable_title,
            date: state_variable_date,
            time: state_variable_Time,
            // price: state_variable_price,
            location: state_variable_location,
            Comtactname: state_variable_Contact_name,
            email: state_variable_email,
            phnum: state_variable_phoneNumber
        };

        setStore(newEvent)
        setTimeout(() => {
            setLoading(false);

        }, 2000)
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        // return document.body.removeChild(script);
    }, [])





    const handelRazorpay = async (amt, guestNumber, contactName, contactEmail, contactPhonenumber) => {
        const usernameRegex = /^[A-Za-z]+$/;
        const isValidUsername = usernameRegex.test(state_variable_Contact_name);
        if (!isValidUsername) {
            toast.error("Username must contain only alphabetic characters", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(state_variable_email);
        if (!isValidEmail) {
            toast.error("Please enter a valid email address", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        const indianphone = /^[6-9]\d{9}$/;
        if (!indianphone.test(state_variable_phoneNumber)) {
            toast.error("Please enter a valid Indian phone number", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }


        if (contactName === "" && contactEmail === '' && contactPhonenumber === '') {
            alert("please field all the input field first")
            return
        }
        else {
            console.log("amt", amt);
            console.log("guestNumber", guestNumber);
            console.log("contactName", contactName);
            console.log("contactEmail", contactEmail);
            console.log("contactPhonenumber", contactPhonenumber);
            console.log("event number", eventDetails);

            const API_URL = "http://localhost:8800/payment/";
            const orderUrl = `${API_URL}order`;

            try {
                const response = await axios.post(orderUrl, {
                    order_id: "#4grbv4",
                    amount: amt,
                });
                const { data } = response;
                const RAZOR_PAY_KEY_ID = "rzp_test_eRibP4Ye1jxcWK";

                const options = {
                    key: RAZOR_PAY_KEY_ID,
                    name: "EventPlanner",
                    description: "Some Description",
                    order_id: data.id,
                    handler: async (response) => {
                        try {
                            const paymentId = response.razorpay_payment_id;
                            const captureUrl = `${API_URL}capture/${paymentId}`;
                            const captureResponse = await axios.post(captureUrl, {});
                            console.log(captureResponse.data);
                        } catch (err) {
                            console.log(err);
                        }
                    },
                    theme: {
                        color: "#da22ff",
                    },
                };


                const rzp1 = new window.Razorpay(options);

                rzp1.open();




            } catch (error) {
                console.log(error);
            }
        }



        setTimeout(() => {
            // payment receipt email
            var templateParams = {
                from_name: "Evento Admin",
                bookingId: randomString,

                Event: eventDetails?.eventname,
                attendee_name: state_variable_Contact_name,
                attendee_email: state_variable_email,
                event_date: state_variable_date,
                event_time: state_variable_Time,
                Noofbooking: numbe,
                Price: eventDetails?.price * numbe,


            };

            emailjs.send('service_a05ds19', 'template_wguz5v4', templateParams, 'f-xebNGuBIf6zPFl1')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }, 5000);


        setBookingFormOpen(false)

        setContactname("")
        setemail('')
        setPhonenum('')
        setNumber(0)
        // setprice(0)
        dispatch(userDashboard(store))

        if (alldetails[0]?.type === 'music') {
            setguestForMusicEvent(true)
            setguestForExhibitionEvent(false)
            setguestForOnlineEvent(false)
            setguestForpartyEvent(false)
            localStorage.setItem('totalbookedguestformusic', numbe)

        }
        if (alldetails[0]?.type === 'party') {
            setguestForpartyEvent(true)
            setguestForExhibitionEvent(false)
            setguestForOnlineEvent(false)
            setguestForMusicEvent(false)
            localStorage.setItem('totalbookedguestforparty', numbe)
        }
        if (alldetails[0]?.type === 'exhibition') {
            setguestForExhibitionEvent(true)
            setguestForOnlineEvent(false)
            setguestForMusicEvent(false)
            setguestForpartyEvent(false)
            localStorage.setItem('totalbookedguestforexhibition', numbe)

        }
        if (alldetails[0]?.type === 'Online Event') {
            setguestForOnlineEvent(true)
            setguestForExhibitionEvent(false)
            setguestForMusicEvent(false)
            setguestForpartyEvent(false)
            localStorage.setItem('totalbookedguestforOnlineevent', numbe)
        }
    }
    const storedGuestNumberformusic = localStorage.getItem('totalbookedguestformusic');
    const storedGuestNumberforexhibition = localStorage.getItem('totalbookedguestforexhibition');
    const storedGuestNumberforOnlineevent = localStorage.getItem('totalbookedguestforOnlineevent');
    const storedGuestNumberforparty = localStorage.getItem('totalbookedguestforparty');

    // generate the order id
    function generateRandomString(length) {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }

        return result;
    }
    const randomString = generateRandomString(5);
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
            {
                loading ?
                    <div className='loaderWrapper'>

                        <PageLoader />
                    </div>
                    :
                    <div className="MusicDetailsPage">

                        <div className="navbar">
                            <Musicdetailspagenavbar />
                        </div>
                        <div className="musicRelatedContent">
                            {
                                initialEvent.map((event, id) => {
                                    return (
                                        <div className="leftContent" key={id}>
                                            <div className="title">
                                                {event.eventname}
                                            </div>
                                            <div className="img">
                                                <img
                                                    src={`http://localhost:8800/${event.imageUrl}`}
                                                    alt=""
                                                    srcSet=""
                                                    height='400'
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
                                                                    {numbe >= 0 ? numbe : 0}
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
                                                            <FaRupeeSign /> {event.price * numbe}.00
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
                                    {(guestForMusicEvent || alldetails[0].type === 'music') &&
                                        <>
                                            Total seat : <span>{1000 - numbe - storedGuestNumberformusic}</span> left
                                        </>}
                                    {(guestForExhibitionEvent || alldetails[0].type === 'exhibition') &&
                                        <>
                                            Total seat : <span>{1000 - numbe - storedGuestNumberforexhibition}</span> left
                                        </>}
                                    {(guestForOnlineEvent || alldetails[0].type === 'Online Event') &&
                                        <>
                                            Total seat : <span>{1000 - numbe - storedGuestNumberforOnlineevent}</span> left
                                        </>}
                                    {(guestForpartyEvent || alldetails[0].type === 'party') &&
                                        <>
                                            Total seat : <span>{1000 - numbe - storedGuestNumberforparty}</span> left
                                        </>}
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
                                                        {event.eventname}
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
                                {/* <div className="starIcon">
                                    <button>
                                        add to cart

                                    </button>
                                </div> */}
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
                                            <input type="text" value={numbe} name="" id="" />
                                        </label>
                                        <label htmlFor="Location">
                                            Amount:
                                            <input type="text" value={`${state_variable_price * numbe}`} name="" id="" />
                                        </label>
                                    </div>
                                    <div className="right">



                                        <label htmlFor="Location">
                                            Location:
                                            <input type="text" value={state_variable_location} name="" id="" />
                                        </label>
                                        <label htmlFor="pno">
                                            Type:
                                            <input type="tel" name="" id="" value={alldetails[0]?.type} onChange={handelPhnum} />

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
                                    <button onClick={() => handelRazorpay(`${state_variable_price * numbe}`, numbe, state_variable_Contact_name, state_variable_email, state_variable_phoneNumber)} >
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
            }


        </>
    )
}

export default MusicDetailsPage