import React, { useState } from 'react';

// TourCard renders individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) => {
    
    // Local state to toggle Read More/Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h5>{`$${price}`}</h5>
            <img src = {image} alt={name} />

            <p>
                {/* Show tour information if readMore is true, otherwise a slice */}
                {readMore ? info : `${info.substring(0, 50)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Toggle button text */}
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>

            {/* Remove tour if user's not interested */}
            <button className='btn-remove' onClick={() => {onRemove(id)}}>
                Not Interested
            </button>
        </article>
    )
}

export default TourCard;