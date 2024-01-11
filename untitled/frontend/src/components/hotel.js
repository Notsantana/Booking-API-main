import React from 'react';
import moment from "moment";

function Hotel({ hotel }) {
    let USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let checkIn = moment.unix(hotel.checkInDateTime.seconds);
    let checkOut = moment.unix(hotel.checkOutDateTime.seconds);
    let price = Math.round(hotel.pricePerNight / 2.34, 2);

    return (
        <div className="row">
            <div className="col">
                <h4>{hotel.name}</h4>
                <p style={{ marginBottom: 0 }}>{checkIn.format("hh:mm A")}</p>
                <p>{hotel.nights} nights</p>
            </div>
            <div className="col-1 col-xxl-1 d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right d-xxl-flex justify-content-xxl-start align-items-xxl-start" style={{ fontSize: "42px" }}>
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
            </div>
            <div className="col">
                <h4>{hotel.location}</h4>
                <p style={{ marginBottom: 0 }}>{checkOut.format("hh:mm A")}</p>
                <p>{hotel.roomType}</p>
            </div>
            <div className="col">
                <p style={{ fontWeight: "bold", marginBottom: 0, textAlign: "right" }}>Total Cost</p>
                <p style={{ marginBottom: "10px", textAlign: "right" }}>
                    <a className="text-end" href="#" style={{ textDecoration: "underline" }}>
                        {USD.format(price)}&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-right">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                    </a>
                </p>
                <p><a href="#">Details</a></p>
            </div>
        </div>
    );
}

export default Hotel;