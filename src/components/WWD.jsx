import { Wwd } from "../contexts/static"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const WWD = () => {
    return (
        <section className='bg-[#184B9A] my-16 '>
            <div className="m-8  py-8">
                <div className="my-16 ">
                    <p className="text-3xl font-bold text-center text-white ">What We Do</p>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <div className="grid lg:grid-cols-3 gap-4 py-[3em] mb-7 pb-9">
                        {Wwd.map((val, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                                    <img src={val.image} alt={val.name} className="rounded-lg" />
                                    <p className="text-black font-bold text-center py-8 text-sm">{val.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>


            </div>


        </section>
    )
}
