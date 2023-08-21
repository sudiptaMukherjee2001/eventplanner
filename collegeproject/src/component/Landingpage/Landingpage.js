import React, { useEffect, useRef, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
//css pages
import "../Landingpage/Landingpage.scss"
import "../Register/Registerpage.scss"
import "../LOGIN/Login.scss"
// Import image
import musicEvent from "../../Images/music-removebg-preview.png";
import onlineEvent from "../../Images/online-event-removebg-preview.png"
import partyEvent from "../../Images/party-removebg-preview.png"
import exhibitionsEvent from "../../Images/exhibitions-removebg-preview.png"
import guiter from "../../Images/guitar.png"
import aboutSectionImage from "../../Images/aboutSectionImage.jpg"
import peoplepartying2 from "../../Images/peoplepartying2.jpg"

//Import component
import Navbar from '../nav/Navbar'
import FeatureEvent from '../FeatureEvent/FeatureEvent'
import Upcommingevent from '../Upcomming Event/Upcommingevent';

//Import Icons

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


//Import utils
import { upcommingEvents } from "../utils/Upcommingevent";

//Import packages
import { Link } from 'react-router-dom';

import Aos from "aos";
import "aos/dist/aos.css"
import Registerpage from '../Register/Registerpage';
import Login from "../LOGIN/Login"
import Footer from '../../Footer/Footer';
import PageLoader from '../PageLoader/PageLoader';
function Landingpage() {
    const [toggelFirstQue, setToggelFirstQue] = useState(true)
    const [toggelSecondQue, setToggelSecondQue] = useState(true)
    const [toggelThirdQue, setToggelThirdQue] = useState(true)
    const [toggelFourthQue, setToggelFourthQue] = useState(true)
    const [Registermodalonoff, setRegistermodalonoff] = useState(false);
    const [Loginmodalonoff, setLoginmodalonoff] = useState(false);

    let [loading, setLoading] = useState(false);


    //loader

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])



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


    const categoryRef = useRef();
    const aboutref = useRef();

    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);

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
                    <div className="landingPage">

                        <Navbar setLoginmodalonoff={setLoginmodalonoff} setRegistermodalonoff={setRegistermodalonoff} categoryRef={categoryRef} aboutref={aboutref} />
                        <div className="banner">

                            <div className="slider-container">
                                <div className="slider"></div>
                            </div>

                        </div>

                        <div className="facillity">
                            <div className="card1"
                                data-aos="fade-up"
                                data-aos-duration="3000">
                                <div className="header">
                                    <TbBrandBooking className='icon' />
                                    <p>
                                        Easy Booking
                                    </p>
                                </div>
                                <p>

                                    Experience hassle-free booking with our user-friendly system, designed to make your reservation process quick and effortless
                                </p>
                            </div>
                            <div className="card2"
                                data-aos="zoom-in"
                            >
                                <div className="header">
                                    <RiCustomerService2Fill className='icon' />
                                    <p>
                                        Best Service
                                    </p>
                                </div>

                                <p>
                                    Our dedicated team of customer service representatives is committed to providing you with the best experience possible.
                                </p>
                            </div>
                            <div className="card3"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="header">
                                    <img src={guiter} alt="" srcset="" />
                                    <p>
                                        Entertainment
                                    </p>
                                </div>
                                <p>
                                    Our intuitive web app empowers users to effortlessly browse and book their desired events, ensuring a hassle-free experience from start to finish
                                </p>
                            </div>
                        </div>
                        <div className="aboutUs">
                            <div className="left" ref={aboutref}>
                                <div className="firstImage">
                                    <img src={aboutSectionImage} alt="" srcset="" />
                                </div>

                                <div className="secondImage" >

                                    <img src={peoplepartying2} alt="" srcset="" />
                                </div>



                            </div>
                            <div className="right">
                                <div className="title">
                                    About Evento
                                </div>
                                <div className="description">
                                    We Are The Best Event Planner & Organizer In Town
                                </div>
                                <div className="about">
                                    Welcome to our event planner web app, where we bring together a diverse collection of exciting events for you to explore and book. Discover unforgettable experiences and create memories that will last a lifetime.
                                </div>
                                <div className="listItem">

                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <AiFillCheckCircle />
                                            </div>
                                            <div className="text">
                                                Best Quality Services
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <AiFillCheckCircle />
                                            </div>
                                            <div className="text">
                                                100% Satisfaction Guarantee
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <AiFillCheckCircle />
                                            </div>
                                            <div className="text">

                                                Commitment to Customers
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <AiFillCheckCircle />
                                            </div>
                                            <div className="text">
                                                Highly Professional Team
                                            </div>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="service"  >
                            <div className="top" ref={categoryRef}>

                                <div className="title">
                                    Our Service
                                </div>
                                <div className="header">
                                    We Provide The Best Service For Your Event
                                </div>
                                <div className="description">
                                    Our event planner web app offers a seamless and intuitive platform to discover and book a wide range of events, ensuring a hassle-free experience for our users.
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="firstService">
                                    <div className="image">
                                        <img src={musicEvent} alt="" srcset="" />
                                    </div>
                                    <div className="serviceName">
                                        Music event
                                    </div>
                                    <div className="btn">
                                        <Link to="/MusicEvents">

                                            View <BsFillArrowRightCircleFill className='serviceIcon' />
                                        </Link>
                                    </div>

                                </div>
                                <div className="secondService">
                                    <div className="image">
                                        <img src={exhibitionsEvent} alt="" srcset="" />
                                    </div>
                                    <div className="serviceName">
                                        ExhibitionsEvent
                                    </div>
                                    <div className="btn">
                                        <Link to="/ExhibitionPage">

                                            View <BsFillArrowRightCircleFill className='serviceIcon' />
                                        </Link>
                                    </div>
                                </div>
                                <div className="thirdService">
                                    <div className="image">
                                        <img src={onlineEvent} alt="" srcset="" />
                                    </div>
                                    <div className="serviceName">
                                        OnlineEvent
                                    </div>
                                    <div className="btn">
                                        <Link to="/OnlineEventPage">

                                            View <BsFillArrowRightCircleFill className='serviceIcon' />
                                        </Link>
                                    </div>
                                </div>
                                <div className="fourthService">
                                    <div className="image">
                                        <img src={partyEvent} alt="" />
                                    </div>
                                    <div className="serviceName">
                                        PartyEvent
                                    </div>
                                    <div className="btn">
                                        <Link to="/PartyEventpage">

                                            View <BsFillArrowRightCircleFill className='serviceIcon' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upcommingEvent">
                            <div className="top">

                                <div className="title">
                                    Our Events
                                </div>
                                <div className="header">
                                    Upcoming Events and Activities
                                </div>
                                <div className="description">
                                    Explore the future of entertainment and discover upcoming events that will fuel your passions. Our 'Upcoming Events' section is packed with thrilling options to help you plan your next adventure
                                </div>
                            </div>
                            <div className="bottom">
                                {
                                    upcommingEvents.map((item) => {
                                        return (

                                            <div className="UpcommingEventbox">
                                                <div className="first">
                                                    <p>{item.date}</p>
                                                    <span>{item.mon}{<item className="year"></item>}</span>
                                                </div>
                                                <div className="middle">
                                                    <img src={item.img} alt="" srcset="" />

                                                </div>
                                                <div className="last">
                                                    <div className="title">{item.title}</div>
                                                    <div className="location">
                                                        <span>
                                                            Location:
                                                        </span>
                                                        {item.Location}
                                                    </div>
                                                    <div className="timming">
                                                        <span>
                                                            Date:
                                                        </span>
                                                        {item.timming}
                                                    </div>
                                                    <div className="type">
                                                        <span>
                                                            Category:
                                                        </span>
                                                        {item.type}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                        <div className="detailspagefaq" style={{ alignItems: "center" }}>

                            <div className="top" style={{ alignItems: "center" }}>

                                <div className="title" >
                                    FAQ
                                </div>
                                <div className="header">
                                    Frequently Asked Questions about our Event Planner
                                </div>

                            </div>
                            <div className="allFaq" style={{ alignItems: "center" }}>

                                <div className="que_ans" style={{ alignItems: "center" }} onClick={handelTogggelFirst}>
                                    <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>


                                        What is the event planner web app?
                                        {toggelFirstQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                                    </div>
                                    <div className={toggelFirstQue ? "ans" : "ans-active"}>
                                        The event planner web app is an online platform that helps you plan and manage various types of events. It provides tools and features to streamline the event planning process and ensure a successful event.
                                    </div>

                                </div>
                                <div className="que_ans" style={{ alignItems: "center" }} onClick={handelTogggelSecond}>
                                    <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>
                                        How can I use the event planner web app?
                                        {toggelSecondQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                                    </div>
                                    <div className={toggelSecondQue ? "ans" : "ans-active"}>
                                        To use the event planner web app, you can simply visit our website and create an account. Once you're signed in, you can search an event and booked your event ..
                                    </div>

                                </div>
                                <div className="que_ans" style={{ alignItems: "center" }} onClick={handelTogggelThird}>
                                    <div className={toggelFirstQue ? "queModalOff" : "queModalOn"}>
                                        Can I customize event details and branding
                                        {toggelThirdQue ? <AiOutlinePlus className='Icon' /> : <AiOutlineMinus className='Icon' />}
                                    </div>
                                    <div className={toggelThirdQue ? "ans" : "thirdfaq"}>
                                        Sorry,this facillity is not availabel right now..
                                    </div>

                                </div>
                                <div className="que_ans" style={{ alignItems: "center" }} onClick={handelTogggelFourth}>
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
                        <div className={Registermodalonoff ? "registerOn" : "registeroff"}>

                            {Registermodalonoff && <Registerpage setRegistermodalonoff={setRegistermodalonoff} />}
                        </div>
                        <div className={Loginmodalonoff ? "loginOn" : "loginoff"}>

                            {Loginmodalonoff && <Login setLoginmodalonoff={setLoginmodalonoff} />}
                        </div>
                        <Footer />
                    </div>
            }








        </>
    )
}

export default Landingpage