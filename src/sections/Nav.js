import { Link, Route, Routes } from "react-router-dom";
import BookingPage from "../components/BookingPage";
import Hero from "./Hero";
import ConfirmedBooking from "../components/ConfirmedBooking";

const Nav = () => {

    const defaultNav = [
        {name: "Home", link: '/'},
        {name: "About", link: '/about'},
        {name: "Menu", link: '/menu'},
        {name: "Reservations", link: '/reservations'},
        {name: "Order Online", link: '/orders'},
        {name: "Login", link: '/login'},
    ]

    return <>
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {defaultNav.map(( nav ) => {
                            return <li key={nav.link}>
                                <Link to={nav.link}>{nav.name}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Hero></Hero>} />
            <Route path="/reservations" element={<BookingPage></BookingPage>}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
        </Routes>
    </>
}

export default Nav;