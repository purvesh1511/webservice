import Link from "next/link";

export default function About() {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="img-border">
                                <img className="img-fluid" src="img/about.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                                <p>We are a leading digital solutions provider with over 10 years of proven experience in delivering innovative, reliable, and result-driven services. Our journey has been defined by a commitment to quality, creativity, and client satisfaction.</p>
                                <p className="mb-4">Over the years, we have helped businesses grow by transforming ideas into powerful digital experiences. From strategy and design to development and deployment, our team ensures every solution is tailored to meet real business needs.</p>
                                <div className="d-flex align-items-center mb-4 pb-2">
                                    <img className="flex-shrink-0 rounded-circle" src="img/team-1.jpg" alt="" style={{ width: "50px", height: "50px" }} />
                                        <div className="ps-4">
                                            <h6>Purvesh Patel</h6>
                                            <small>SEO & Founder</small>
                                        </div>
                                </div>
                                <Link className="btn btn-primary rounded-pill py-3 px-5" href="/about">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    );
}