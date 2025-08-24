import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between">
            <div>
                <img src="../public/logo.jpg" alt="Logo" className="h-8" />
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </div>
            
        </nav>
    );
};

export default Navbar;
