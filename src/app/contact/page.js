import ContactPage from "@/components/ContactPage";
import Image from "next/image";
import contactImg from "@/assets/contact-us.webp";

const Contact = () => {
  return (
    <div className="mt-20">
      <div className="md:flex justify-between items-center gap-y-8">
      <Image src={contactImg} width={500} height={500} alt="" className="md:w-1/2 md:order-2"/>
        <div className="md:w-1/2">
        <h2 className="text-center text-5xl font-bold my-10">Contact Us</h2>
        <p className="text-center md:w-2/3 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          modi! Architecto cum excepturi non obcaecati qui laboriosam facilis a
          quisquam harum nulla reprehenderit ratione praesentium laborum
          corporis, unde ex vero!
        </p>
        </div>
    
      </div>
      <ContactPage />
    </div>
  );
};

export default Contact;
