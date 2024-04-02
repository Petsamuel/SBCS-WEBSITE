import feturedImg from '../assets/images/featured-img.png'
import { Upcomming } from '../contexts/static'
import { EventButton } from '../components/Button'


export const Events = () => {
  return (
    <section className="mx-8 flex flex-col mt-16 items-center justify-center gap-10 mb-32">
      <div className="mx-8 flex gap-16 items-center flex-col-reverse lg:flex-row">
        <div className="flex-auto lg:w-1/2 ">
          <p className="text-2xl font-black">Featured Name Event</p>
          <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita harum quo dolor impedit cupiditate quidem asperiores beatae repudiandae,
          </p>
          <div className="py-6">
            <p className='font-semibold'>Description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita harum quo dolor impedit cupiditate quidem asperiores beatae repudiandae, totam animi tempora in possimus magnam rem qui aliquam modi ratione.

            </p>
          </div>
        </div>

        <div className='flex'>
          <img src={feturedImg} alt="alt" className='w-auto rounded-t-full' />
        </div>
      </div>
      <div className="upcomming">
        <div className="my-24 ">
          <p className="text-3xl font-bold text-center text-black ">Upcoming Events</p>
        </div>

        <div className="grid lg:grid-cols-2 place-content-center gap-10 py-8 items-center justify-center">
          {Upcomming.map((val, index) => (
            <div key={index} className='bg-white shadow-md p-8 rounded-2xl'>
              <div className=''>
                <img src={val.image} alt={val.name} className="rounded-t-2xl w-[18em] h-auto" />
                <div className='py-8 flex flex-col gap-4'>
                  <p className="text-lg font-bold">Name: {val.name}</p>
                  <p>Venue: {val.venue}</p>
                  <p>Date/Time: {val.date} {val.time}</p>

                </div>
                <EventButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
