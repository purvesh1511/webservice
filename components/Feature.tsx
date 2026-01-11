export default function Feature() {
    return (
        <>
            {/* <!-- Feature Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="h-100">
                                <h6 className="section-title bg-white text-start text-primary pe-3">Why Choose Us</h6>
                                <h1 className="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
                                <p className="mb-4">We are trusted by businesses because we consistently deliver reliable, high-quality digital solutions that create real results. With years of hands-on experience, we understand what it takes to turn ideas into successful digital products.</p>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="skill">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Digital Marketing</p>
                                                <p className="mb-2">85%</p>
                                            </div>
                                            <div className="progress">
                                                <div 
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={85}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="skill">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">SEO & Backlinks</p>
                                                <p className="mb-2">90%</p>
                                            </div>
                                            <div className="progress">
                                                <div 
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={90}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="skill">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Design & Development</p>
                                                <p className="mb-2">95%</p>
                                            </div>
                                            <div className="progress">
                                                <div 
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={95}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="img-border">
                                <img className="img-fluid" src="img/feature.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}
        </>
    );
}