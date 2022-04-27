import ContactUsForm from "./ContactUsForm";
import contactUsLogo from "../Img_Contact.png";

export default function ContactUs() {
  return (
    <section className="contact-us-container">
      <div className="contact-us-info">
        <h3>Contact Us</h3>
        <p>
          Mollit dolore id velit incididunt reprehenderit consectetur pariatur
          consequat voluptate minim ea tempor.
        </p>
        <ContactUsForm />
      </div>
      <div className="contact-us-image">
        <img className="contact-us-image" src={contactUsLogo} alt="Logo" />
      </div>
    </section>
  );
}
