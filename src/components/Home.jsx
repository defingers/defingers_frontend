import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import services from '../global/services.json';

const Home = () => {
    const [selectedService, setSelectedService] = useState(services[0]?.serviceName || '');
    const navigate = useNavigate();

    return (
        <>
           
            <div>
                <h1>Welcome to Our Service</h1>
                <p>Explore our services and find the right solution for your needs.</p>
                <label htmlFor="service-select" className="block mb-2 font-bold">Choose a service:</label>
            
                <div className="flex gap-4 mb-4">
                    <button
                        className="bg-orange-400 text-white px-4 py-2 rounded font-bold cursor-pointer"
                        onClick={() => {
                            setSelectedService('Cloud Migration');
                            navigate('/service/1');
                        }}
                    >
                        Cloud Migration
                    </button>
                    <button
                        className="bg-orange-400 text-white px-4 py-2 rounded font-bold cursor-pointer"
                        onClick={() => {
                            setSelectedService('IT Infrastructure');
                            navigate('/service/2');
                        }}
                    >
                        IT Infrastructure
                    </button>
                   
                    <button
                        className="bg-orange-400 text-white px-4 py-2 rounded font-bold cursor-pointer"
                        onClick={() => {
                            setSelectedService('Data Lake Management');
                            navigate('/consultancy/1');
                        }}
                    >
                        IT Recruitment
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
