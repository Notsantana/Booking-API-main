import React, { useEffect, useRef, useState } from 'react';
import auckland from '../img/BB auckland.jpg';
import bali from '../img/BB bali.webp';
import london from '../img/BB london.jpg';
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Home(props) {
    let [hotels, setHotels] = useState([]);
    const city = useRef("Auckland");
    const checkInDate = useRef("");
    const checkOutDate = useRef("");
    const guests = useRef(1);
    const navigate = useNavigate();
    let today = moment();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/list", { state: { city: city.current.value, checkInDate: checkInDate.current.value, checkOutDate: checkOutDate.current.value, guests: guests.current.value } });
    }

    useEffect(() => {
        const getHotels = async () => {
            await axios.get("http://localhost:8080/hotels").then((res) => {
                setHotels(res.data.data);
            }).catch((e) => {
                console.log(e);
            });
        }
        getHotels();
    }, []);

    return (
        <>
            <section className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
                {/* ... (existing code remains unchanged) */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-uppercase" style={{ textAlign: "center", fontFamily: "'Bebas Neue', sans-serif" }}>Special Hotel Offers</h1>
                    </div>
                </div>
                <div className="row g-0">
                    {/* Modify the images and alt text accordingly */}
                    <div className="col-auto col-md-4" style={{ background: "transparent" }}>
                        <img className="img-fluid" src={bali} alt="Hotel in Bali" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={london} alt="Hotel in London" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={auckland} alt="Hotel in Auckland" />
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ borderStyle: "none" }}>
                            <div className="card-body">
                                {/* ... (existing code remains unchanged) */}
                                <a className="card-link" href="#">Book Your Stay Today!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
