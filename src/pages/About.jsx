import about from "../assets/images/about.png"

export const About = () => {
    return (
        <section className="mx-8 flex lg:flex-row  mt-16  items-center mb-32 gap-16 flex-col-reverse">
            <div className="lg:w-2/3">
                <p className="font-bold text-2xl py-4">About Us</p>
                <p className="lg:1/3">Welcome to our thriving tech community, where young professionals come together to connect, network, and empower one another.Our mission is simple yet powerful: to provide students with invaluable opportunities to build meaningful connections and open doors in the world of tech. In this digital era, networking plays a pivotal role in shaping successful careers. By joining our community, you ll have the chance to meet like-minded individuals, share experiences, and foster collaborations that can propel you forward. We believe that empowering young professionals with the right connections can make all the difference in achieving their tech aspirations. Our platform is here to support you every step of the way, providing resources, guidance, and mentorship opportunities to help you navigate the tech industry with confidence. We are committed to helping you unlock your potential, gain insights from seasoned professionals, and access exciting career prospects. </p>
            </div>
            <div className="flex-auto">
                <img src={about} alt="about-img" />
            </div>
        </section>
    )
}
