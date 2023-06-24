// import React, { useState } from 'react'

// import "../../component/Admin/Admin.scss"

// import { eventCreate } from "../../feature/Adminslice"
// import { useDispatch } from 'react-redux';
// function Admindashboard() {

//     const dispatch = useDispatch();

//     // state variable for input field
//     const [state_variable_title, setTitle] = useState('');
//     const [state_variable_date, setDate] = useState('');
//     const [state_variable_price, setprice] = useState('');
//     const [state_variable_location, setlocation] = useState('');
//     const [state_variable_Time, setTime] = useState('');
//     const [state_variable_pic, setPic] = useState('');
//     const [state_variable_Seat, setSeat] = useState('');
//     const [state_variable_type, settype] = useState('');




//     const [storename, setStoreName] = useState([]);

//     const handeltitleChange = (e) => {
//         const eventTitle = e.target.value;

//         setTitle(eventTitle);

//     }
//     const handelDateChange = (e) => {
//         const eventDate = e.target.value;

//         setDate(eventDate);

//     }
//     const handelTimechange = (e) => {
//         const eventTime = e.target.value;

//         setTime(eventTime);

//     }

//     const handelPricechange = (e) => {
//         const eventprice = e.target.value;

//         setprice(eventprice);

//     }
//     const handelLocationchange = (e) => {
//         const eventlocation = e.target.value;

//         setlocation(eventlocation);

//     }

//     const handelpicchange = (e) => {
//         const eventPic = e.target.value;

//         setPic(eventPic);

//     }
//     const handleTypeChange = (e) => {
//         const eventType = e.target.value;
//         settype(eventType)

//     }
//     console.log("event Type", state_variable_type)
//     const handelStoreEventDetails = () => {
//         const newEvent = {
//             Eventname: state_variable_title,
//             location: state_variable_location,
//             date: state_variable_date,
//             pic: state_variable_pic,
//             time: state_variable_Time,
//             price: state_variable_price,
//             seats: state_variable_Seat,
//             type: state_variable_type
//         };

//         setStoreName(newEvent);
//         // dispatch(eventCreate(storename));
//     };
//     console.log("storename", storename)

//     return (
//         <>

//             <div className='adminForm'>

//                 <div className="header">
//                     <div className="title">
//                         <h1>

//                             Create Your  Event
//                         </h1>
//                     </div>

//                 </div>
//                 <div className="eventDetails">
//                     <div className="left">
//                         <label htmlFor="eventName">
//                             Event Name:

//                             <input type="text" name="" id="" value={state_variable_title} onChange={handeltitleChange} />
//                         </label>
//                         <label htmlFor="eventDate">
//                             Date:
//                             <input type="text" name="" id="" value={state_variable_date} onChange={handelDateChange} />
//                         </label>
//                         <label htmlFor="eventTime">
//                             Time:
//                             <input type="text" name="" id="" value={state_variable_Time} onChange={handelTimechange} />
//                         </label>
//                         <label htmlFor="eventSeats">
//                             Total Seats:
//                             <input type="text" name="" id="" value={state_variable_Time} onChange={handelTimechange} />
//                         </label>



//                     </div>
//                     <div className="right">

//                         <label htmlFor="Location">
//                             Price:
//                             <input type="text" name="" id="" value={state_variable_price} onChange={handelPricechange} />
//                         </label>

//                         <label htmlFor="Location">
//                             Location:
//                             <input type="text" name="" id="" value={state_variable_location} onChange={handelLocationchange} />
//                         </label>
//                         <label htmlFor="" className='file'>
//                             Image:
//                             <input type="file" name="" id="" value={state_variable_pic} onChange={handelpicchange} />
//                         </label>
//                         <label htmlFor="" >
//                             Evet Type:
//                             <select value={state_variable_type} onChange={handleTypeChange}>
//                                 <option value="">Select Your Event</option>
//                                 <option value="Music">Music</option>
//                                 <option value="Exhibition">Exhibition</option>
//                                 <option value="Party">Party</option>
//                             </select>
//                         </label>


//                     </div>
//                 </div>
//                 <div className="btn">
//                     <button onClick={handelStoreEventDetails}>
//                         Create Your Event
//                     </button>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Admindashboard

import React, { useState } from "react";
import axios from "axios";

import "../../component/Admin/Admin.scss";

import { eventCreate } from "../../feature/Adminslice";
import { useDispatch } from "react-redux";

function Admindashboard() {
    const dispatch = useDispatch();

    // state variable for input field
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [file, setFile] = useState("");
    const [seats, setSeats] = useState("");
    const [type, setType] = useState("");

    const [storename, setStoreName] = useState([]);

    const handleTitleChange = (e) => {
        const eventTitle = e.target.value;
        setTitle(eventTitle);
    };

    const handleDateChange = (e) => {
        const eventDate = e.target.value;
        setDate(eventDate);
    };

    const handleTimeChange = (e) => {
        const eventTime = e.target.value;
        setTime(eventTime);
    };

    const handlePriceChange = (e) => {
        const eventPrice = e.target.value;
        setPrice(eventPrice);
    };

    const handleLocationChange = (e) => {
        const eventLocation = e.target.value;
        setLocation(eventLocation);
    };

    const handleFileChange = (e) => {
        const eventFile = e.target.value;
        setFile(eventFile);
    };

    const handleTypeChange = (e) => {
        const eventType = e.target.value;
        setType(eventType);
    };

    const handleStoreEventDetails = () => {
        const newEvent = {
            eventname: title,
            location,
            date,
            file,
            time,
            price,
            seats,
            type,
        };

        setStoreName(newEvent);
        axios
            .post("http://localhost:8800/events/add", newEvent)
            .then((response) => {
                // Handle success
                console.log("Event created successfully:", response.data);
                dispatch(eventCreate(storename));
            })
            .catch((error) => {
                // Handle error
                console.error("Error creating event:", error);
            });
    };

    console.log("event Type", type);
    console.log("storename", storename);

    return (
        <>
            <div className="adminForm">
                <div className="header">
                    <div className="title">
                        <h1>Create Your Event</h1>
                    </div>
                </div>
                <div className="eventDetails">
                    <div className="left">
                        <label htmlFor="eventName">
                            Event Name:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </label>
                        <label htmlFor="eventDate">
                            Date:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={date}
                                onChange={handleDateChange}
                            />
                        </label>
                        <label htmlFor="eventTime">
                            Time:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={time}
                                onChange={handleTimeChange}
                            />
                        </label>
                        <label htmlFor="eventSeats">
                            Total Seats:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={seats}
                                onChange={(e) => setSeats(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="right">
                        <label htmlFor="Location">
                            Price:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </label>
                        <label htmlFor="Location">
                            Location:
                            <input
                                type="text"
                                name=""
                                id=""
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </label>
                        <label htmlFor="" className="file">
                            Image:
                            <input
                                type="file"
                                name=""
                                id=""
                                value={file}
                                onChange={handleFileChange}
                            />
                        </label>
                        <label htmlFor="">
                            Event Type:
                            <select value={type} onChange={handleTypeChange}>
                                <option value="">Select Your Event</option>
                                <option value="Music">Music</option>
                                <option value="Exhibition">Exhibition</option>
                                <option value="Party">Party</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={handleStoreEventDetails}>Create Your Event</button>
                </div>
            </div>
        </>
    );
}

export default Admindashboard;