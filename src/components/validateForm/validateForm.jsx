export const validateForm = (formData) => {
  const errors = {};

  // Validate email
  if (!formData.email) {
    errors.email = "This field may not be blank.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = "Invalid email address.";
  }

  // Validate phone_number
  if (!formData.phone_number) {
    errors.phone_number = "This field may not be blank.";
  } else if (formData.phone_number.length > 13) {
    errors.phone_number =
      "Phone number should have no more than 13 characters.";
  }

  // Validate team_name
  if (!formData.team_name) {
    errors.team_name = "This field may not be blank.";
  }

  // Validate project_topic
  if (!formData.project_topic) {
    errors.project_topic = "This field may not be blank.";
  }

  // Validate privacy_poclicy_accepted
  if (!formData.privacy_poclicy_accepted) {
    errors.privacy_poclicy_accepted = "You must accept the privacy policy.";
  }

  return errors;
};
