import { useState } from "react";
import { Input } from "../../../../components/input/Input";
import { Textarea } from "../../../../components/textarea/Textarea";
import Button from "../../../../components/button/Button";
import { contactFormValidate } from "../../../../components/validateForm/contactFormValidate";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Make sure the property name matches the input field name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = contactFormValidate(formData);
    if (Object.keys(errors).length === 0) {
        setIsSubmitting(true)
        toast.success("Form submitted successfully!, We'll get back to you as soon as possible")
        setIsSubmitting(false)
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
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full p-4"
        >
          <div>
            <Input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="First Name"
              value={formData.full_name}
              onChange={handleInputChange}
            />
            {formErrors.full_name && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.full_name}
              </div>
            )}
          </div>
          <div>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Mail"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.email}
              </div>
            )}
          </div>
          <div>
            <Textarea
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && (
              <div className="text-[#a94442] text-sm font-normal mt-3">
                {formErrors.message}
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
