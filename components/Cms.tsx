export default function Cms({id}: {id: number}) {
    const Cmspage = [
        {
            id: 1,
            title: "Privacy Policy",
            description: "We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard any data you share with us while using our website or services.<br/><br/>We collect only the information necessary to provide and improve our services, respond to inquiries, and ensure a secure user experience. Your data is handled responsibly and is never sold, traded, or shared with third parties without your consent, except where required by law.<br><br>We implement appropriate technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure. By using our website, you agree to the practices described in this policy.",
            readMoreLink: ""
        },
        {
            id: 2,
            title: "Terms and Conditions",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            readMoreLink: ""
        },
        {
            id: 3,
            title: "Refund Policy",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            readMoreLink: ""
        },
        {
            id: 4,
            title: "Cookie Policy",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            readMoreLink: ""
        },
        {
            id: 5,
            title: "Support",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            readMoreLink: ""
        }
    ];
    
    const cmsItem = Cmspage.find(item => item.id === id);

    return (
        <>
            {/* <!-- CMS Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="mb-3">{cmsItem?.title}</h5>
                            <p className="mb-4">{cmsItem?.description}</p>
                            {/* <a className="btn btn-primary py-2 px-4" href={cmsItem?.readMoreLink}>Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CMS End --> */}
        </>
    );
}