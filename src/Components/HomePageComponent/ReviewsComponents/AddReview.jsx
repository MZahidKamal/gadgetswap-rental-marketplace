import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !review || rating === 0) {
            alert("Please fill in all fields and select a rating.");
            return;
        }

        console.log("Review Submitted:", { name, review, rating });

        // Reset Form & Show Success Message
        setName("");
        setReview("");
        setRating(0);
        setHover(null);
        setSuccessMessage("Thank you! Your review has been submitted.");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
      
            <div className="bg-gray-100 py-12 px-6">

                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text text-center mb-6 drop-shadow-md">
                        Share Your Experience
                    </h2>


                    {/* Success Message */}
                    {successMessage && (
                        <p className="text-green-600 text-center font-semibold mb-4">
                            {successMessage}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="peer w-full h-9 px-4 py-2 border border-gray-300 rounded-md bg-blue-50 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-gray-900 text-sm font-medium transition-all"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder=" " // Keep an empty placeholder to trigger peer-placeholder-shown
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-2 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 "
                            >
                                Your Name
                            </label>
                        </div>



                        {/* Review Textarea */}
                        <div className="relative">
                            <textarea
                                id="review"
                                className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-gray-600 pt-8 text-sm font-medium transition-all"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                rows="4"
                                required
                            ></textarea>
                            <label
                                htmlFor="review"
                                className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 "
                            >
                                Your Review
                            </label>
                        </div>


                        {/* Star Rating */}
                        <div className="flex items-center gap-4">
                            <label className="block text-gray-700 text-4xl font-medium mb-2">Rating :</label>
                            <div className="flex space-x-2">
                                {[...Array(5)].map((_, index) => {
                                    const currentRating = index + 1;
                                    return (
                                        <FaStar
                                            key={index}
                                            size={26}
                                            className={`cursor-pointer transition-all ${currentRating <= (hover || rating)
                                                ? "text-yellow-500 scale-110"
                                                : "text-gray-300"
                                                }`}
                                            onClick={() => setRating(currentRating)}
                                            onMouseEnter={() => setHover(currentRating)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    );
                                })}
                            </div>
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-md text-lg font-medium shadow-md hover:opacity-90 transition-all"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
     
    );
};

export default AddReview;
