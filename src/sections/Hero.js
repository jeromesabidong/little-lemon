import { Link } from "react-router-dom";

const Hero = () => {
    return <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Spiderman" />
                <div className="prose">
                    <h1 className="text-5xl font-bold">Little Lemon</h1>
                    <h2 className="text-3xl font-bold">Chicago</h2>
                    <p className="py-6">
                        We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/reservations" >
                        <button className="btn btn-secondary">Reserve a Table</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Hero;