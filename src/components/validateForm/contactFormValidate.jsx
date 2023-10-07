export const contactFormValidate = (formData) => {
  const errors = {};

  // Validate user_full_name
  if (!formData.user_full_name) {
    errors.user_full_name = "This field may not be blank.";
  } else if (!/^[A-Za-z\s]+$/.test(formData.user_full_name)) {
    errors.user_full_name = "Only letters and spaces are allowed in this field.";
  } else {
    formData.user_full_name = formData.user_full_name.trim();
  }

  // Validate email
  if (!formData.user_email) {
    errors.user_email = "This field may not be blank.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)) {
    errors.user_email = "Invalid email address.";
  }

  // Validate message
  if (!formData.user_message) {
    errors.user_message = "This field may not be blank.";
  } else {
    formData.user_message = formData.user_message.trim();
  }

  return errors;
};
