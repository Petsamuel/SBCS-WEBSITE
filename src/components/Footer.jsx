import { Fragment } from "react"
import logo from '../assets/images/logo-white.png'
import { Menu } from "../contexts/static"
import { Link } from "react-router-dom"

export const Footer = () => {
    const date = new Date()


    return (
        <Fragment>
            <footer className="flex bg-black dark:text-white text-white  flex-col ">
                <div className="flex justify-evenly items-center py-8 gap-8 lg:flex-row flex-col ">
                    <div className="logo flex items-center  flex-col">
                        <img src={logo} alt="logo" className="w-[40%]" />
                        <div className="about flex flex-col">
                            <p>About the Company</p>
                            <div className="social"></div>

                        </div>
                    </div>
                    <div className="quick_link">
                        <p>Quick Links</p>
                        <ul className="flex flex-col">
                            {Menu.map((value, index) => (
                                <span key={index}>
                                    <Link to={value.link} >
                                        {value.name}
                                    </Link>
                                </span>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="copy text-center">&copy; {date.getFullYear()} Ololade  </div>

            </footer>
        </Fragment>
    )
}