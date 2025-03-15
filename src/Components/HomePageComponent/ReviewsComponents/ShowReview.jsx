import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import reviewsData from '../../../../public/reviews.json';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Simulating fetching the reviews (you can adjust this to fetch data if needed)
        setReviews(reviewsData);
    }, []);

    const reviewsToDisplay = showAll ? reviews : reviews.slice(0, 3);

    const handleShowAllClick = () => {
        setShowAll(!showAll);
    };

    return (
        <section className="bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Customer Reviews
                </h3>
                
                {/* Reviews List */}
                <div className="space-y-8">
                    {reviewsToDisplay.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xl font-semibold text-gray-900">{review.name}</h4>
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <FaStar
                                            key={starIndex}
                                            size={20}
                                            className={`${
                                                starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-base text-gray-700">{review.review}</p>
                        </div>
                    ))}
                </div>

                {/* Show All Button */}
                {reviews.length > 3 && (
                    <div className="text-center mt-2">
                        <button
                            onClick={handleShowAllClick}
                            className="text-blue-500 text-lg font-semibold hover:text-blue-700 transition duration-300 underline"
                        >
                            {showAll ? 'Show Less' : 'Show All'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShowReview;
