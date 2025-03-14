import React, { useState } from "react";
import { FaLaptop, FaCamera, FaGamepad, FaMobileAlt, FaHeadphones, FaClock, FaTabletAlt, FaTv, FaTools, FaCar } from "react-icons/fa";
import categoriesData from '../../../../public/categories.json';  // Import JSON data
import productsData from '../../../../public/products.json'; 

// Mapping icons from JSON data to actual React Icon components
const iconMap = {
    FaLaptop: <FaLaptop />,
    FaCamera: <FaCamera />,
    FaGamepad: <FaGamepad />,
    FaMobileAlt: <FaMobileAlt />,
    FaHeadphones: <FaHeadphones />,
    FaClock: <FaClock />,
    FaTabletAlt: <FaTabletAlt />,
    FaTv: <FaTv />,
    FaTools: <FaTools />,
    FaCar: <FaCar />
};

const CategoryComponent = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Items per page
    const itemsPerPage = 9;

    // Filter products based on selected category
    const filteredProducts = activeCategory === null 
        ? productsData 
        : productsData.filter((product) => product.categoryId === activeCategory);

    console.log("Active Category:", activeCategory);
    console.log("Filtered Products:", filteredProducts); // Debug filtered products

    // Paginate products
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-6">
                {/* Horizontally Scrollable Buttons */}
                <div className="flex">
                    <h2 className="text-gray-700">Categories:</h2>
                    <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-2 px-2">
                        {/* "All Categories" button */}
                        <button
                            className="flex items-center h-10 w-40 space-x-2 px-3 py-1 text-xs rounded-md text-white bg-gray-500 shadow-md hover:opacity-80 whitespace-nowrap"
                            onClick={() => setActiveCategory(null)}
                        >
                            <span>All Categories</span>
                        </button>

                        {/* Category buttons */}
                        {categoriesData.map((category) => (
                            <button
                                key={category.id}
                                className={`flex items-center h-10 w-40 space-x-2 px-3 py-1 text-xs rounded-md text-white ${category.color} shadow-md hover:opacity-80 whitespace-nowrap`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {iconMap[category.icon]} {/* Display icon based on the icon name */}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Display Products for the selected category */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {paginatedProducts.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 text-xs">
                                Rent Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-6 flex justify-center space-x-4">
                    {/* Previous Page Button */}
                    <button
                        className={`h-10 w-20 text-sm bg-blue-500 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {/* Page Number Buttons */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`h-10 w-10 text-sm rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => goToPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next Page Button */}
                    <button
                        className={`h-10 w-20 text-sm bg-blue-500 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CategoryComponent;
