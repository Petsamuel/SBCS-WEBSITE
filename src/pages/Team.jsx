
import { useState } from "react"
import profile from "../assets/images/profile.png"
import profile2 from "../assets/images/profile2.png"
import { TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from "react-icons/ti"


export const Team = () => {
    const [active, setActive] = useState(1)
    // const [active, setActive] = useState()

    const TeamGroup = [
        "All", "Commitee", "Mentors", "Reps", "Partners"
    ]

    const Profile = [
        {
            name: "Jon Doe",
            position: "UI/UX Designer",
            socials: "",
            image: profile
        },
        {
            name: "Jennifa Peters",
            position: "Creative Director",
            socials: "",
            image: profile2
        },
    ]

    const handleClick = (val) => {
        setActive(val)
    }

    return (
        <section className="flex flex-col justify-center items-center place-content-center mx-8">
            <div className="my-24 flex flex-col  justify-center items-center place-content-center">
                <p className="text-3xl font-bold  text-black ">Meet Our Team</p>
                <p className="font-thin py-4">Our expert team is made up of creatives with technical knowhow, strategist who think outside the box , and developers who push innovation.</p>
            </div>

            <div className="flex">
                <div className="flex gap-4 overflow-hidden">
                    {
                        TeamGroup.map((val, index) => (
                            <p className={`cursor-pointer ${active === index ? "border-b-2 border-[#184B9A]" : ""}`} key={index} onClick={() => { handleClick(index) }}> {val} </p>
                        ))
                    }
                </div>
            </div>

            <div className="flex py-10 ">
                <div className="flex gap-6  ">
                    {Profile.map((val, index) => (
                        <div key={index} className=" shadow-md p-8">
                            <img src={val.image} alt={val.position} className="rounded-sm" />
                            <div className="py-4">
                                <p className="font-semibold cursor-pointer py-4">{val.name}</p>
                                <p className="font-thin cursor-pointer ">{val.position}</p>
                                <div className="flex gap-4 pt-4">
                                    <TiSocialFacebook className="text-lg cursor-pointer" />
                                    <TiSocialLinkedin className="text-lg cursor-pointer" />
                                    <TiSocialTwitter className="text-lg cursor-pointer" />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
