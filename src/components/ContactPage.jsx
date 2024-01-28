import Image from "next/image";
import profilePic from "../assets/banner-img.png";

const ContactPage = () => {
    return (
        <div className=" bg-no-repeat bg-cover bg-[#8a2ce2] text-white md:h-72 rounded-md my-8 px-5">
        <div className="md:flex justify-center h-full items-center">
          <div className="md:w-1/2 md:p-10 px-5 py-10 text-center">
            <h2 className="text-3xl font-bold">
              JOIN OUR NEWSLETTER TODAY
            </h2>
            <p className="my-3 pr-5">
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi.
            </p>
            <div className="w-full mt-5">
                <input type="email" name="email" id="email" placeholder="Enter your email" className="md:w-72 rounded "/> 
                <input type="submit" value="Submit" className="btn ml-2 px-3 py-2"/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactPage;