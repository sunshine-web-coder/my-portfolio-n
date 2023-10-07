import { useState, useRef } from "react";
import { Input } from "../../../../components/input/Input";
import { Textarea } from "../../../../components/textarea/Textarea";
import Button from "../../../../components/button/Button";
import { contactFormValidate } from "../../../../components/validateForm/contactFormValidate";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_full_name: "",
    user_email: "",
    user_message: "",
  });

  const form = useRef();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Make sure the property name matches the input field name
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = contactFormValidate(formData);
  
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          "service_5ne6zte",
          "template_0po0ad8",
          form.current,
          "user_smVmLdKLZToLPUntDjJ3X"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({
              user_full_name: "", // Clear the full name field
              user_email: "", // Clear the email field
              user_message: "", // Clear the message field
            });
            setFormErrors({});
            toast.success(
              "Form submitted successfully!, We'll get back to you as soon as possible"
            );
            setIsSubmitting(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setFormErrors(errors);
    }
  };
  

  return (
    <div id="contact" className="mt-[10px] md:mt-[90px] pt-[100px] md:pt-0">
       <h2 className="text-2xl mb-2 font-thin font-[Arial]">CONTACT ME</h2>
      <h3 className="text-4xl">Let&apos;s have a chat!</h3>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-[60px]">
        <form
        ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full p-4"
        >
          <div>
            <Input
              type="text"
              id="user_full_name"
              name="user_full_name"
              placeholder="Full Name"
              value={formData.user_full_name}
              onChange={handleInputChange}
            />
            {formErrors.user_full_name && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.user_full_name}
              </div>
            )}
          </div>
          <div>
            <Input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Mail"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            {formErrors.user_email && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.user_email}
              </div>
            )}
          </div>
          <div>
            <Textarea
              placeholder="Message"
              name="user_message"
              id="user_message"
              value={formData.user_message}
              onChange={handleInputChange}
            />
            {formErrors.user_message && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.user_message}
              </div>
            )}
          </div>
          <div>
            <Button text="Send" disabled={isSubmitting} className="uppercase font-semibold text-xl" />
          </div>
        </form>
        <div className="w-full p-4">
            <h6 className="text-2xl">REACH ME ON</h6>

            <ul className="text-lg mt-6 flex flex-col gap-4">
                <li><a className="hover:underline flex gap-5 items-center" href="tel:+2349079709430"><i className="fa-solid fa-phone"></i> +2349079709430</a></li>
                <li><a className="hover:underline flex gap-5 items-center" href="https://www.linkedin.com/in/fajuyagbe-ezekiel/"><i className="fa-brands fa-linkedin"></i> Fajuyagbe Ezekiel</a></li>
                <li><a className="hover:underline flex gap-5 items-center" href="https://github.com/sunshine-web-coder"><i className="fa-brands fa-github"></i> sunshine-web-coder</a></li>
                <li><a className="hover:underline flex gap-5 items-center" href="mailto:fajuyabeezekiel90@gmail.com"><i className="fa-solid fa-envelope"></i> fajuyabeezekiel90@gmail.com</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
