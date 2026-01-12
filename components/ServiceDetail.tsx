import Link from "next/link";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getService(slug: string) {
    const res = await fetch(`${BASE_URL}/api/service/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch service data");
    }

    return res.json();
}

export default async function ServiceDetail({ slug }: { slug: string }) {
    console.log("ServiceDetail component received slug:", slug);
    const service = await getService(slug);
    console.log(service);
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-primary px-3">
                            Our Service
                        </h6>
                        <h1 className="display-5 mt-3">
                            {service.service_title}
                        </h1>
                        <p className="text-muted mt-3">
                            {service.short_description}
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="row g-5 align-items-center">

                        {/* Image */}
                        <div className="col-lg-6">
                            <img
                                className="img-fluid rounded shadow"
                                src={`${BASE_URL}/${service.service_image}`}
                                alt={service.service_title}
                            />
                        </div>

                        {/* Description */}
                        <div className="col-lg-6">
                            <h4 className="text-primary mb-3">
                                About This Service
                            </h4>
                            <p className="mb-4">
                                {service.long_description}
                            </p>

                            {/* Features */}
                            <div className="row g-3 mb-4">
                                {service.features.map((feature: string, index: number) => (
                                    <div className="col-sm-6" key={index}>
                                        <p className="mb-0">
                                            <i className="fa fa-check text-primary me-2"></i>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="btn btn-primary rounded-pill py-3 px-5"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="row g-4 mt-5">

                        {/* Frameworks */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tech-card h-100 bg-primary rounded p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Frameworks</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {service.frameworks.map((item: string, i: number) => (
                                        <span key={i} className="badge tech-badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tech-card h-100 bg-primary rounded p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Backend</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {service.backend.map((item: string, i: number) => (
                                        <span key={i} className="badge tech-badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Database */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tech-card h-100 bg-primary rounded p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Database</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {service.database.map((item: string, i: number) => (
                                        <span key={i} className="badge tech-badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tech-card h-100 bg-primary rounded p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Tools</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {service.tools.map((item: string, i: number) => (
                                        <span key={i} className="badge tech-badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Process */}
                    <div className="mt-5">
                        <div className="container-xxl py-5">
                            <div className="container">

                                {/* Section Header */}
                                <div className="text-center mb-5">
                                    <h6 className="section-title bg-white text-primary px-3">
                                        Our Process
                                    </h6>
                                    <h1 className="display-6 mb-4">
                                        How We Work
                                    </h1>
                                </div>

                                {/* Process Steps */}
                                <div className="row g-4">
                                    {service.process.map((step: string, index: number) => (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="process-box bg-light rounded p-4 h-100 position-relative">

                                                {/* Step Number */}
                                                <div className="process-number">
                                                    {index + 1}
                                                </div>

                                                {/* Content */}
                                                <h5 className="mb-3 mt-4">
                                                    Step {index + 1}
                                                </h5>

                                                <p className="mb-0 text-muted">
                                                    {step}
                                                </p>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}