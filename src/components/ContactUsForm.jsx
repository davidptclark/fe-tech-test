import { useState } from "react";
import * as api from "../utils/api";

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
  const [addNumberField, setAddNumberField] = useState(false);

  const handleInputChange = (level) => (e) => {
    const { name, value } = e.target;
    if (name.includes("Phone")) {
      //adding them as properties in an object to push when submitted
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
    api.postContactData(values);
  };

  return (
    <div className="contact-us-form-container">
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input name="FullName" onChange={handleInputChange()} required />
        <label>Email address</label>
        <input name="EmailAddress" onChange={handleInputChange()} required />
        <label>Phone number 01 - optional</label>
        <input name="PhoneNum01" onChange={handleInputChange()} />
        {addNumberField ? (
          <>
            <label>Phone number 02 - optional</label>
            <input name="PhoneNum02" onChange={handleInputChange()} />
          </>
        ) : (
          <></>
        )}
        <button onClick={() => setAddNumberField(!addNumberField)}>
          {addNumberField ? "Remove phone number" : "Add new phone number"}
        </button>
        <br></br>
        <label>Message maximum...</label>
        <textarea name="Message" onChange={handleInputChange()} required />
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
        {isChecked ? (
          <>
            <label>Address line 1</label>
            <input
              name="AddressLine1"
              onChange={handleInputChange("AddressDetails")}
              required
            />
            <label>Address line 2 - optional</label>
            <input
              name="AddressLine2"
              onChange={handleInputChange("AddressDetails")}
            />
            <label>City/Town</label>
            <input
              name="CityTown"
              onChange={handleInputChange("AddressDetails")}
              required
            />
            <label>State/County</label>
            <input
              name="StateCounty"
              onChange={handleInputChange("AddressDetails")}
              required
            />
            <label>Postcode</label>
            <input
              name="Postcode"
              onChange={handleInputChange("AddressDetails")}
              required
            />
            <label>Country</label>
            <input
              name="Country"
              onChange={handleInputChange("AddressDetails")}
              required
            />
          </>
        ) : (
          <></>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
