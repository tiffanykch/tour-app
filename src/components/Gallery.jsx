import React, {use, useEffect, useState} from "react";
import TourCard from "./TourCard";

// Gallery is resposible for fetching tours and rendering tour list
const Gallery = ({ tours, setTours, onRemove }) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from API
    const fetchTours = async () => {
        try {
            const res = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');

            // Map API data to the fields we need
            const data = await res.json();
            const tours = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image
            }));
            setTours(tours);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching tours:", error);
            setError(true);
            setLoading(false);
        }
    };

    // Run fetchTours once after component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // Render loading state
    if (loading) {
        return <h2>Loading...</h2>;
    };

    // Render error state
    if (error) {
        return <h2>Oh no! Error fetching tours.</h2>
    }

    // Render if no tours remain
    if (tours.length === 0) {
        return (
            <section className="gallery">
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </section>
        );
    }

    // Render list of TourCards
    return (
        <section className="gallery">
            <h2>Our Tours</h2>
            <div className="tour-list">
                {tours.map((tour) => {
                    return (
                        <TourCard 
                            key={tour.id} 
                            {...tour} 
                            onRemove={onRemove}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default Gallery;