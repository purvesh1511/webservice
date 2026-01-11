import Link from "next/link";

async function getServices() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL +`/api/service`,
    { cache: "no-store" }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch services data");
  }
  return res.json();
}

export default async function Service() {
    const services = await getServices();

    return (
        <>
            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp w-max-600" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
                    </div>
                    <div className="row g-4">
                        {services.map((service : any) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={service.id}>
                            <Link className="service-item d-block rounded text-center h-100 p-4" href={`/services/${service.slug}`}>
                                <img className="img-fluid rounded mb-4" src={service.service_image} alt={service.service_title} />
                                    <h4 className="mb-0">{service.service_title}</h4>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}
        </>
    );
}