import { Fragment, useState } from "react"
import { Menu } from "../contexts/static"
import Logo from "../assets/images/uos_logo.png"
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

export const Header = () => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState()
    return (
        <Fragment>
            <header className="header fixed z-50 shadow-md w-full justify-center p-2 text-sm bg-white">
                <nav className="flex w-full items-center justify-evenly ">
                    <div className="logo">
                        <img src={Logo} alt="brand-logo " className="w-1/2" />
                    </div>
                    <div className={` md:lg:inline relative `}>
                        <ul className="lg:flex lg:md:relative absolute lg:md:flex-row flex flex-col bg-white h-screen lg:h-0 lg:-left-0  -left-[12em]">
                            {Menu.map((menu, key) => (
                                <div key={key} onClick={() => setValue(key)} className={active ? " pt-[2em] w-screen mt-12 lg:pt-0 lg:w-auto lg:mt-auto" : "hidden lg:inline"}>
                                    <li className={`mx-7 ${value === key ? "border-b-2 border-[#184B9A] " : ""}`}><Link to={menu.link}>{menu.name} </Link></li>
                                </div>
                            ))}

                        </ul>
                    </div>
                    <div className="flex gap-4 items-center z-30">

                        <div className="lg:hidden cursor-pointer" onClick={() => setActive(!active)}> {!active ? <TiThMenu className="text-2xl" /> : <MdOutlineClose className="text-2xl" />}</div>
                    </div>


                </nav>
            </header>
        </Fragment>
    )
}