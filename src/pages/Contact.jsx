import { Compositions } from "../contexts/static";
import { ContactFormBtn } from "../components/Button";
export const Contact = () => {
    return (
        <section className="mx-8  flex flex-col my-16">
            <div className="my-24 ">
                <p className="text-3xl font-bold text-center text-black ">
                    Love to hear from you ,  Get in touch 👋
                </p>
            </div>

            <div className="flex flex-col mx-8">
                <div className="flex flex-col py-5">
                    <label htmlFor="Name">FullName</label>
                    <input type="text" name="name" id="name" className="h-12 border-gray-100 border p-2" />
                </div>
                <div className="flex flex-col py-5">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="email" id="email" className="h-12 border-gray-100 border p-2" />
                </div>
                <div className="flex flex-col py-5">
                    <label htmlFor="">What Are You Intrested In</label>
                    <select name="" id="" className="h-12 border-gray-100 border p-2">
                        <option value="Brand and Design"></option>
                        {Compositions.map((val, key) => (
                            <option value="Brand and Design" key={key}>{val.name}</option>
                        ))}

                    </select>
                </div>
                <div className="flex flex-col py-5">
                    <label htmlFor="Email">Message</label>
                    <textarea name="" id="" cols="30" rows="10" className="h-12 border-gray-100 border p-2"></textarea>
                </div>
                <ContactFormBtn />
            </div>
        </section>
    )
}
