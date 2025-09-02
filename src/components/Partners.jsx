import React from 'react';
import './TieUps.css';

const Partners = () => {
    return (
          <section className="flex flex-col">
                    <h2 className="text-3xl font-bold text-center text-orange-400 mt-5">Trusted by Industry Leaders</h2>
                    <p className="text-center mt-2">Based on 100+ client review</p>
                    <div className="container mt-5 mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
                            {/* Left grid */}
                            <div className="w-full lg:w-1/3">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                    <div className="logo-grid  mx-auto">
                                        <div className="logo twitter">Twitter</div>
                                        <div className="logo amazon">Amazon</div>
                                        <div className="logo honda">Honda</div>
                                        <div className="logo services">our IT Service partners</div>
                                        <div className="logo google">google</div>
                                        <div className="logo nike">Nike</div>
                                        <div className="logo rover">Rover</div>
                                        <div className="logo ferrari">Ferrari</div>
                                    </div>
                                </div>
                            </div>
                            {/* Right grid */}
                            <div className="w-full lg:w-1/3">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                                    <div className="logo-grid mx-auto">
                                        <div className="logo apple">Apple</div>
                                        <div className="logo bentley">Bently</div>
                                        <div className="logo netflix">Netflix</div>
                                        <div className="logo consultancy">our IT consultancy partners</div>
                                        <div className="logo ferrari2">Ferrari</div>
                                        <div className="logo facebook">Facebook</div>
                                        <div className="logo audi">Audi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Partners;