import React from 'react';

const Partners = () => {
    return (
        <section id="trusted-companies-section" className="flex flex-col relative">
            <h2 className="text-3xl font-bold text-center text-orange-400 mt-5">
                Trusted by Industry Leaders
            </h2>
            <p className="text-center mt-2">Based on 20+ client reviews</p>
            <div className="container mt-5 mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 xl:gap-20 justify-center items-start ">
                    {/* Left grid */}
                    <div className="w-full min-w-0 flex justify-center xl:w-1/3">

                        {/* Desktop/Tablet */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-12 grid-rows-18 gap-2 w-[90vw] max-w-[450px] h-[350px] p-2">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-6">
                                    Sagar Soft
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-4">
                                    Virtusa
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-8">
                                    Union Sys
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-3">
                                    Sterlite
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[35px] rounded-2xl col-span-3 row-span-3">
                                   Xius Corp 
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[45px] rounded-2xl col-span-3 row-span-3">
                                    Novus
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[55px] rounded-2xl col-span-3 row-span-6">
                                    Reli Global
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-bl-[75px] rounded-2xl col-span-3 row-span-10">
                                    SOARG
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="block lg:hidden">
                            <div className="grid grid-cols-18 grid-rows-12 gap-2 w-[350px] h-[250px] p-5">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Sagar Soft
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Virtusa
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Union Sys
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs text-center rounded-2xl p-2 col-span-8 row-span-4">
                                    Sterlite
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Xius Corp
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Novus 
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-4 row-span-3">
                                    Reli Global
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-4 row-span-3">
                                    SOARG
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
                                    Livelle
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-5">
                                    Ambernova
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-3 row-span-7">
                                    Mirafra
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-6 row-span-3">
                                    Hic Global
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[55px] rounded-2xl col-span-3 row-span-12">
                                    Intellative
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[35px] rounded-2xl col-span-3 row-span-7">
                                    Appmandi
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-br-[45px] rounded-2xl col-span-6 row-span-8">
                                    Elaxo
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="block lg:hidden">
                            <div className="grid grid-cols-18 grid-rows-12 gap-2 w-[350px] h-[250px] p-5 ">
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Livelle
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Ambernova
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Mirafra
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs text-center rounded-2xl col-span-8 row-span-4">
                                    Hic Global
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-6">
                                    Intellative
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-5 row-span-4">
                                    Appmandi
                                </div>
                                <div className="border-2 border-gray-400 flex items-center justify-center font-bold text-xs rounded-2xl col-span-8 row-span-3">
                                    Elaxo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wavy Pattern Divider */}
            <div className="relative w-full " style={{ backgroundColor: '#FDEDAF' }}>
                <svg 
                    className="w-full h-40 md:h-56 lg:h-72" 
                    viewBox="0 0 1200 250" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background rectangle to ensure solid color */}
                    <rect width="1200" height="250" fill="#FDEDAF"/>
                    {/* White wave on top - deeper in middle-left, shallower on sides */}
                    <path 
                        d="M0,20 Q250,40 450,180 T1200,20 L1200,0 L0,0 Z" 
                        fill="#FFFFFF"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Partners;