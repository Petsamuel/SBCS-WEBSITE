import { Compositions } from "../contexts/static"

export const Composition = () => {
    return (
        <section className="flex flex-col justify-center gap-8 mx-8">
            <div className="mt-16">
                <p className="text-2xl font-bold text-center ">Team Composition</p>
            </div>
            <div>
                <div className="grid lg:grid-cols-4 grid-cols-2 p-8 gap-16">
                    {Compositions.map((val, index) => (
                        <div key={index} className="flex p-16 gap-4 shadow items-center flex-col">
                            <img src={val.icon} alt="alt" className={`${val.name == "Cyber Security" ? "bg-[#FFB630] " : val.name == "Robotics" ? "bg-[#0B9922]" : val.name == "Project Management" ? "bg-[#FFB630]" : val.name == "Health" ? "bg-[#FFB630] " : val.name == "Business" ? "bg-[#0B9922] " : " bg-[#184B9A]"} p-2 rounded-md`} />
                            <p>{val.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
