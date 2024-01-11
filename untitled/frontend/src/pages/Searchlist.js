import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import banner from "../img/BB_travelad.jpg";
import axios from "axios";
import Hotel from "../components/Hotel";

function SearchList(props) {
    const { state } = useLocation();
    const { city, checkInDate, checkOutDate, guests } = state;

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const getHotels = () => {
            // Replace the API endpoint with the appropriate hotel API endpoint
            axios.get("http://localhost:8080/hotel").then((res) => {
                let list = [];
                for (let hotel of res.data.data) {
                    list.push(hotel);
                }
                setHotels(list);
            });
        };

        getHotels();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Choose Hotels</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ paddingRight: "0", paddingLeft: "0" }}>
                        <img alt="banner" className="img-fluid" src={banner} width="1320" height="385" />
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-auto col-lg-4" id="left">
                        {/* Filter and sorting options */}
                        {/* ... (Similar to the flight booking code) */}
                    </div>
                    <div className="col" id="right">
                        <div className="row">
                            {/* Input fields for hotel booking (e.g., city, check-in/out dates, guests) */}
                            {/* ... (Similar to the flight booking code) */}
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="resultTabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        {/* Display tabs for different dates or hotel options */}
                                        <li className="nav-item" role="presentation"><a className="nav-link active text-start" role="tab" data-bs-toggle="tab" href="#tab-1">Sun, Dec 3<br />$150</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Mon, Dec 4<br />$180</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-3">Tue, Dec 5<br />$120</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        {/* Display hotel options based on selected tab */}
                                        <div className="tab-pane active" role="tabpanel" id="tab-1">
                                            {hotels.map((hotel) => (
                                                <Hotel key={hotel.id} hotel={hotel} />
                                            ))}
                                        </div>
                                        <div className="tab-pane" role="tabpanel" id="tab-2">
                                            {hotels.map((hotel) => (
                                                <Hotel key={hotel.id} hotel={hotel} />
                                            ))}
                                        </div>
                                        <div className="tab-pane" role="tabpanel" id="tab-3">
                                            {hotels.map((hotel) => (
                                                <Hotel key={hotel.id} hotel={hotel} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchList;
