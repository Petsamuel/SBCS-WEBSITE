import Man from '../assets/svg/man-2.svg'
import Boy from '../assets/svg/boy-2.svg'
import { Button } from './Button'
export const Hero = () => {
    return (
        <section className="flex grow flex-col items-center place-content-center my-5 py-6 mx-8">
            <div className="flex items-center justify-center flex-col ">
                <p className="font-['Rubik'] font-black text-4xl">
                    Empowering and inspiring the Future of Tech
                </p>
                <p className="font-extralight p-6 shadow-sm">
                    Lets shape the future of technology and make a positive impact on the world
                    
                </p>
                <div>
                    <Button />
                </div>
            </div>

            <div className="flex items-center lg:flex-row flex-col justify-center gap-16 lg:gap-0">
                <div className="">
                    <img src={Man} alt="null" />
                </div>
                <div className="flex-1">
                    <p className='text-[#1B4F7E] text-xl font-bold text-center lg:text-start'>
                        We believe that empowering young professionals with the right connections can make all the difference in achieving their tech aspirations.
                    </p>
                </div>
                <div className="relative ">
                    <img src={Boy} alt="null" className='lg:-mt-24' />
                </div>
            </div>
        </section>
    )
}
