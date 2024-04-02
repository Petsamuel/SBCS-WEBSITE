import Line1 from "../assets/svg/line1.svg"
import Line2 from "../assets/svg/line2.svg"


export const Mission = () => {

    const Future = ["F", "U", "T", "U", "R", "E"]
    return (
        <section className="bg-[#184B9A] text-white my-8 rounded-t-[5rem]">

            <div className="flex lg:p-24 p-8 lg:flex-row flex-col gap-4">
                <div className="flex-auto">
                    <p className="text-2xl my-16">Our Mission</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam, ratione alias eaque nisi recusandae ipsum officiis ducimus aperiam quos unde debitis quis suscipit temporibus ullam. Vero eos minus quia!</p>
                </div>
                <div>
                    <img src={Line1} alt="line" className="hidden lg:inline h-full w-[1.5em]" />
                    <img src={Line2} alt="line" className="lg:hidden w-[1.5em]" />

                </div>
                <div className="flex-1">
                    <p className="text-2xl my-16">Core Value</p>
                    <div className="flex gap-12 items-center">
                        {Future.map((val, index) => (
                            <p key={index} className=" w-[3.5em] h-auto lg:p-4 p-2 bg-white rounded-full text-black text-sm">
                                {val}
                            </p>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
