import valid from "../Icon_Valid.svg";

export default function SuccessfulSubmission() {
  return (
    <div className="success-prompt-container">
      <div className="valid-image-circle">
        <img className="valid-image" src={valid} alt="Tick" />
      </div>
      <h2>Your message has been sent</h2>
      <p>We will be in contact with you within 24 hours.</p>
    </div>
  );
}
