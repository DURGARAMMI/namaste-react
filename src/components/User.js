import { useState } from "react";
const User = (props) => {

    // User = ({name`}) - i can destructe in the way to access props as well...
    const [count] = useState("0")
    const [count2] = useState("1")
    return (
        <div className="user-card">
            <h2>count is=={count}</h2>
            <h2>count2 is=={count2}</h2>
            <h1>Name: {props.name}</h1>
            <h2>Location: Hyderabad</h2>
            <h3>Contact: @turito.com</h3>
            <h4>This is Functional Component</h4>
        </div>
    );
}

// export default User;
// import React, { useState, useEffect } from 'react';

// const proximityThreshold = 2; // 2 ft proximity threshold

// function ProximityAlert({ coordinates1 }) {
//     const [coordinates2, setCoordinates2] = useState(null);
//     const [error, setError] = useState(null);
//     const [withinProximity, setWithinProximity] = useState(false);

//     useEffect(() => {
//         if (navigator.geolocation) {
//             const watchId = navigator.geolocation.watchPosition(
//                 (position) => {
//                     const newPosition = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCoordinates2(newPosition);
//                 },
//                 (err) => {
//                     setError(err.message);
//                 }
//             );

//             return () => {
//                 navigator.geolocation.clearWatch(watchId);
//             };
//         } else {
//             setError("Geolocation is not supported by this browser.");
//         }
//     }, []);

//     useEffect(() => {
//         if (coordinates1 && coordinates2) {
//             const distance = getDistance(coordinates1, coordinates2);
//             setWithinProximity(distance <= proximityThreshold);
//         }
//     }, [coordinates1, coordinates2]);

//     const getDistance = (coords1, coords2) => {
//         const lat1 = coords1.lat;
//         const lon1 = coords1.lng;
//         const lat2 = coords2.lat;
//         const lon2 = coords2.lng;

//         // Calculate distance using Haversine formula
//         const R = 6371000; // Radius of the Earth in meters
//         const φ1 = lat1 * Math.PI / 180;
//         const φ2 = lat2 * Math.PI / 180;
//         const Δφ = (lat2 - lat1) * Math.PI / 180;
//         const Δλ = (lon2 - lon1) * Math.PI / 180;

//         const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//             Math.cos(φ1) * Math.cos(φ2) *
//             Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//         const distance = R * c; // Distance in meters
//         const distanceInFeet = distance * 3.28084; // Convert meters to feet
//         console.log(distanceInFeet, distance)
//         return distanceInFeet;
//     };

//     return (
//         <div>
//             {error && <p>Error: {error}</p>}
//             {withinProximity ? (
//                 <p>Proximity Alert: You are within 2 ft of the target coordinates!</p>
//             ) : (
//                 <p>You are away from the target coordinates.</p>
//             )}
//         </div>
//     );
// }

// export default ProximityAlert;
