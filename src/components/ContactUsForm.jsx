import { useState } from "react";
import * as api from "../utils/api";
import SubmissionError from "./SubmissionError";
import SuccessfulSubmission from "./SuccessfulSubmission";
import ErrorPage from "./ErrorPage";
import submit from "../Icon_Submit.svg";

export default function ContactUsForm() {
  const [values, setValues] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    Message: "",
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });
  const [phoneNumbers, setPhoneNumbers] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [submissionErrors, setSubmissionErrors] = useState([]);
  const [hasPosted, setHasPosted] = useState(false);
  const [addNumberField, setAddNumberField] = useState(false);

  const postcodePattern =
    "^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$";

  const handleInputChange = (level) => (e) => {
    const { name, value } = e.target;
    if (name.includes("Phone")) {
      //adding them as properties in an object then add to an array as one element
      setPhoneNumbers({
        ...phoneNumbers,
        [name]: String(value),
      });
      setValues({
        ...values,
        PhoneNumbers: [...Object.values(phoneNumbers)],
      });
    } else if (!level) {
      //assumes root level of values object
      setValues({
        ...values,
        [name]: String(value),
      });
    } else {
      //if AddressDetails is passed as level argument, values set in nested object
      setValues({
        ...values,
        [level]: {
          ...values[level],
          [name]: String(value),
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.postContactData(values).then((response) => {
      if (response === 200) {
        setIsFailure(false);
        setHasPosted(true);
      } else {
        setIsFailure(true);
        setSubmissionErrors(response);
      }
    });
  };

  const status = submissionErrors.status;

  if (status !== 200 && status !== 400 && typeof status !== "undefined")
    return <ErrorPage />; //Allowing for internal server error
  return (
    <div className="contact-us-form-container">
      {isFailure ? (
        <SubmissionError submissionErrors={submissionErrors} />
      ) : (
        <></>
      )}
      {hasPosted ? (
        <SuccessfulSubmission />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full name</label>
            <input
              name="FullName"
              onChange={handleInputChange()}
              pattern="^[a-zA-Z\s]*$"
              title="Name may only contain letters and spaces."
              required
            />
          </div>
          <div>
            <label>Email address</label>
            <input
              name="EmailAddress"
              onChange={handleInputChange()}
              type="email"
              id="email"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              title="Email address has to follow a valid format: e.g john@example.com"
              required
            />
          </div>
          <div className="phone-number-input">
            <label>
              Phone number 01
              <span className="optional-field"> - optional</span>
            </label>
            <input
              name="PhoneNum01"
              type="tel"
              onChange={handleInputChange()}
              minLength="11"
              maxLength="20"
              pattern="^[0-9]*$"
              title="Phone number cannot contain non-numeric characters."
            />
            {addNumberField ? (
              <>
                <label>
                  Phone number 02
                  <span className="optional-field"> - optional</span>
                </label>
                <input
                  name="PhoneNum02"
                  type="tel"
                  onChange={handleInputChange()}
                  minLength="11"
                  maxLength="20"
                  pattern="^[0-9]*$"
                  title="Phone number cannot contain non-numeric characters."
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <button
            type="button"
            className="add-number-button"
            onClick={() => setAddNumberField(!addNumberField)}
          >
            {addNumberField ? "Remove phone number" : "Add new phone number"}
          </button>
          <br></br>
          <label>
            Message{" "}
            <span className="maximum-length">
              - maximum text length is 500 characters
            </span>
          </label>
          <textarea
            name="Message"
            onChange={handleInputChange()}
            maxLength="500"
            required
          />
          <div className="address-checkbox">
            <label>Add address details</label>
            <input
              type="checkbox"
              id="address"
              name="address"
              onChange={() => {
                setValues({
                  ...values,
                  bIncludeAddressDetails: !isChecked,
                });
                setIsChecked(!isChecked);
              }}
            />
          </div>
          {isChecked ? (
            <>
              <div>
                <label>Address line 1</label>
                <input
                  name="AddressLine1"
                  onChange={handleInputChange("AddressDetails")}
                  required
                />
              </div>
              <div>
                <label>
                  Address line 2
                  <span className="optional-field">- optional</span>
                </label>
                <input
                  name="AddressLine2"
                  onChange={handleInputChange("AddressDetails")}
                />
              </div>
              <div>
                <div>
                  <label>City/Town</label>
                  <input
                    name="CityTown"
                    onChange={handleInputChange("AddressDetails")}
                    pattern="^[a-zA-Z\s]*$"
                    title="Name may only contain letters and spaces."
                    required
                  />
                </div>
                <div>
                  <label>State/County</label>
                  <input
                    name="StateCounty"
                    onChange={handleInputChange("AddressDetails")}
                    pattern="^[a-zA-Z\s]*$"
                    title="Name may only contain letters and spaces."
                    required
                  />
                </div>
                <div>
                  <label>Postcode</label>
                  <input
                    name="Postcode"
                    onChange={handleInputChange("AddressDetails")}
                    pattern={postcodePattern}
                    title="Should be a valid UK postcode: e.g. N18 2TH"
                    required
                  />
                </div>
                <div>
                  <label>Country</label>
                  <input
                    name="Country"
                    onChange={handleInputChange("AddressDetails")}
                    pattern="^[a-zA-Z\s]*$"
                    title="Country may only contain letters and spaces."
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <button className="submit-button" type="submit">
            <img src={submit} alt="Submit Icon" />
            <span>Submit</span>
          </button>
        </form>
      )}
    </div>
  );
}
