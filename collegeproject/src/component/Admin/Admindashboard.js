
// Create event page

import React, { forwardRef, useState } from "react";
import axios from "axios";

import "../../component/Admin/Admin.scss";

import { eventCreate } from "../../feature/Adminslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Admindashboard() {
    const dispatch = useDispatch();

    // state variable for input field
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    // const [file, setFile] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [seats, setSeats] = useState("");
    const [type, setType] = useState("");

    const [storename, setStoreName] = useState([]);
    const navigate = useNavigate();
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

    const handlefileChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleTypeChange = (e) => {
        const eventType = e.target.value;
        setType(eventType);
    };

    const handleStoreEventDetails = () => {

        let formData = new FormData();
        formData.append("userId", localStorage.getItem("userId"));
        formData.append("eventname", title);
        formData.append("location", location);
        formData.append("date", date);
        formData.append("file", productImage);
        formData.append("time", time);
        formData.append("price", price);
        formData.append("seats", seats);
        formData.append("type", type);

        axios
            .post("http://localhost:8800/events/add", formData)
            .then((response) => {
                // Handle success
                console.log("Event created successfully:", response.data);
                dispatch(eventCreate(storename));
                toast.success("Event submitted for approval. We'll notify you soon.", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate("/");
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
                                style={{ marginLeft: "30px" }}
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
                                multiple
                                name=""
                                id=""
                                // value={file}
                                onChange={handlefileChange}
                            />
                        </label>
                        <label htmlFor="">
                            Event Type:
                            <select value={type} onChange={handleTypeChange}>
                                <option value="">Select Your Event</option>
                                <option value="music">Music</option>
                                <option value="exhibition">Exhibition</option>
                                <option value="party">Party</option>
                                <option value="Online Event">Online Event</option>
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