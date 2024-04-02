import { FAq } from "../contexts/static"
import { useState } from 'react'
import { HiOutlineMinusCircle } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";

export const FAQ = () => {
    const [currentFAQ, setCurrentFAQ] = useState();
    const [active, setActive] = useState(false)
    const handleClick = (val) => {
        setCurrentFAQ(val)
        setActive(!active)
    }
    return (
        <section className="">
            <div className="mt-16 py-8 text-center">
                <p className="text-3xl font-bold text-center ">Frequently asked Questions</p>
                <p className="text-bold">Have quesitons? we are here to help</p>
            </div>
            <div>
                <div className="m-8  ">
                    {FAq.map((val, index) => (
                        <div key={index} className="">
                            <div className={` flex justify-between p-5  cursor-pointer ${val.question == currentFAQ ? "bg-gray-50  ease-in font-bold" : ""}`} onClick={() => { handleClick(val.question); }}>
                                <p className="">{val.question}</p>
                                <p>{val.question == currentFAQ ? <HiOutlineMinusCircle className="text-2xl" /> : <HiOutlinePlusCircle className="text-2xl" />}</p>
                            </div>
                            <div className={val.question == currentFAQ ? "block" : "hidden"}>
                                <p className="p-5 pl-5">{val.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
