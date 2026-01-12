import Link from "next/link";

export default function InnerBanner({ name }: { name: string }) {
    return (
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn">
            <div className="container text-center py-5">
                <h1 className="display-4 text-white animated slideInDown mb-3">{name}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">{name}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}
