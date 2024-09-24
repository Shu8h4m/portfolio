import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // You can handle the form submission here
    emailjs
      .sendForm("service_8pph2k4", "template_3v6mt9j", form.current, {
        publicKey: "0xx9pyyvhdWaEqSfQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
    // console.log(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Get In Touch With Me!</h2>
      <p className="form-subheading">I'm just a message away</p>
      <form className="form" onSubmit={handleSubmit} ref={form}>
        <input
          className="form-input"
          type="text"
          name="user_name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          required
        />
        <input
          className="form-input"
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          required
        />
        <input
          className="form-input"
          type="text"
          name="user_subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          id="subject"
        />
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          required
        />
        <button type="submit" className="form-button" value="Send">
          {loading ? (
            <div>Sending...</div>
          ) : (
            <div>
              {" "}
              Let's Talk{" "}
              <span role="img" aria-label="phone">
                📞
              </span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
