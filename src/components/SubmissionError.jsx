export default function SubmissionError({ submissionErrors }) {
  const errorMessages = {
    //look up of all possible errors from API
    Required: "Need to supply a value",
    EmailAddress: "Email address is invalid",
    "PhoneNumbers[0]":
      "Phone number 01 is invalid. Cannot exceed 20 characters. If provided, a phone number value cannot be null or empty",
    "PhoneNumbers[1]":
      "Phone number 02 is invalid. Cannot exceed 20 characters. If provided, a phone number value cannot be null or empty",
    Message: "The message provided exceeds the maximum length allowed",
    "AddressDetails.Postcode": "Not a valid UK postcode",
  };

  const errors = submissionErrors.data.Errors;

  return (
    <div className="contact-us-submission-error-container">
      The completed forms have the following errors:
      <ul>
        {errors.map((error) => {
          return (
            <li key={error.FieldName}>{errorMessages[error.FieldName]}</li>
          );
        })}
      </ul>
    </div>
  );
}
