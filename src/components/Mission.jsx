import Line1 from "../assets/svg/line1.svg"
import Line2 from "../assets/svg/line2.svg"


export const Mission = () => {

    const Future = ["F", "U", "T", "U", "R", "E"]
    return (
        <section className="bg-[#184B9A] text-white my-8 rounded-t-[5rem]">

            <div className="flex lg:p-24 p-8 lg:flex-row flex-col justify-center items-center">
                <div className="flex-auto">
                    <p className="text-2xl my-16">Our Mission</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam, ratione alias eaque nisi recusandae ipsum officiis ducimus aperiam quos unde debitis quis suscipit temporibus ullam. Vero eos minus quia!</p>
                </div>
                <div className="mx-6 px-6">
                    <img src={Line1} alt="line" className="hidden lg:inline h-full w-[1.5em]" />
                    <img src={Line2} alt="line" className="lg:hidden w-screen" />

                </div>
                <div className="">
                    <p className="text-2xl my-16 text-center">Core Value</p>
                    <div className="flex lg:gap-12 gap-2 items-center justify-center place-content-center">
                        {Future.map((val, index) => (
                            <div key={index} className=" h-auto lg:p-3 p-3 bg-white rounded-full text-black text-sm flex items-center w-11 text-center ">
                                <p className="text-center font-bold">{val}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
