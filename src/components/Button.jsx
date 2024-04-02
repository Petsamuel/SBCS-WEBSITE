import { MdArrowForward } from "react-icons/md"


export const Button = () => {

    return (
        <div className="my-2">
            <button className="bg-[#184B9A]  px-6 py-3 rounded-xl text-white flex items-center gap-4">
                Contact Us <MdArrowForward className=" text-2xl font-bold bg-amber-500 p-1 rounded-full text-white" />
            </button>
        </div>
    )
}
export const EventButton = () => {
    return (
        <div className="my-2">
            <button className="bg-[#184B9A]  px-6 py-3 rounded-3xl text-white justify-center hover:bg-[#184c9ae1] flex items-center gap-2">
                Get Ticket <MdArrowForward className=" text-2xl font-bold bg-amber-500 p-1 rounded-full text-white" />
            </button>
        </div>

    )
}

export const ContactFormBtn = () => {
    return (
        <div className="my-2 flex">
            <button className="bg-[#184B9A]  px-6 py-3 rounded-md text-white w-1/3 flex items-center text-center justify-center hover:bg-[#184c9ae1]">
                Send <MdArrowForward />
            </button>
        </div>

    )

}
