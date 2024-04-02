import { Fragment } from "react"
import logo from '../assets/images/logo-white.png'
import { Menu } from "../contexts/static"
import { Link } from "react-router-dom"
import { TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from "react-icons/ti"

export const Footer = () => {
    const date = new Date()


    return (
        <Fragment>
            <footer className="flex bg-[#184B9A]  dark:text-white text-white  flex-col ">
                <div className="flex   lg:items-center py-8  lg:flex-row flex-col mx-16">
                    <div className="flex-1 justify-around flex-col">
                        <img src={logo} alt="logo" className="w-[20%]" />
                        <div className=" flex flex-col lg:w-1/3 py-4">
                            <p>About the Company</p>
                            <div className="social text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel hendrerit purus. Nunc auctor ex sit amet molestie fermentum. Integer elementum dolor lectus, quis finibus sapien auctor id. Nunc iaculis ultricies eleifend. Pellentesque dictum.
                            </div>
                            <div className="flex gap-2 pt-4">
                                <TiSocialFacebook className="text-2xl bg-black rounded-full p-1" />
                                <TiSocialTwitter className="text-2xl  bg-black rounded-full p-1" />
                                <TiSocialLinkedin className="text-2xl bg-black rounded-full p-1" />

                            </div>
                            <div className="text-sm py-5">&copy; {date.getFullYear()} Ololade  </div>

                        </div>
                    </div>
                    <div className="quick_link ">
                        <p className="text-2xl">Quick Links</p>
                        <ul className="flex flex-col">
                            {Menu.map((value, index) => (
                                <span key={index} className="hover:text-black p-2 text-sm">
                                    <Link to={value.link} >
                                        {value.name}
                                    </Link>
                                </span>
                            ))}
                        </ul>
                    </div>

                </div>


            </footer>
        </Fragment>
    )
}