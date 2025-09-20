import React from 'react';

const Partners = () => {
    return (
        <section className="flex flex-col">
            <h2 className="text-3xl font-bold text-center text-orange-400 mt-5">
                Trusted by Industry Leaders
            </h2>
            <p className="text-center mt-2">Based on 100+ client review</p>
            <div className="container mt-5 mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 xl:gap-20 justify-center items-start ">
                    {/* Left grid */}
                    <div className="w-full min-w-0 flex justify-center xl:w-1/3">

                        {/* Desktop/Tablet */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-12 grid-rows-18 gap-2 w-[90vw] max-w-[450px] h-[350px] p-2">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-6">
                                    Twitter
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-4">
                                    Amazon
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-8">
                                    Honda
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-3">
                                    our IT Service partners
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[35px] rounded-2xl col-span-3 row-span-3">
                                    google
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[45px] rounded-2xl col-span-3 row-span-3">
                                    Nike
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[55px] rounded-2xl col-span-3 row-span-6">
                                    Rover
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[75px] rounded-2xl col-span-3 row-span-10">
                                    Ferrari
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="block lg:hidden">
                            <div className="grid grid-cols-18 grid-rows-12 gap-2 w-[350px] h-[250px] p-5">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Twitter
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Amazon
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Honda
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs text-center rounded-2xl p-2 col-span-8 row-span-4">
                                    Our IT Service partners
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Ferrari
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Rover
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-4 row-span-3">
                                    google
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-4 row-span-3">
                                    Nike
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right grid */}
                    <div className="w-full min-w-0 flex justify-center xl:w-1/3">

                        {/* Desktop/Tablet */}
                        <div className="hidden lg:block  ">
                            <div className="grid grid-cols-12 grid-rows-18 gap-2 w-[90vw] max-w-[450px] h-[350px] p-2 ">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-6">
                                    Apple
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-5">
                                    Bently
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-7">
                                    Netflix
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-3">
                                    our IT consultancy partners
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[55px] rounded-2xl col-span-3 row-span-12">
                                    Ferrari
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[35px] rounded-2xl col-span-3 row-span-7">
                                    Facebook
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[45px] rounded-2xl col-span-6 row-span-8">
                                    Audi
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="block lg:hidden">
                            <div className="grid grid-cols-18 grid-rows-12 gap-2 w-[350px] h-[250px] p-5 ">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Apple
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Bently
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Netflix
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs text-center rounded-2xl col-span-8 row-span-4">
                                    our IT consultancy partners
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Ferrari
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Facebook
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Audi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Partners;