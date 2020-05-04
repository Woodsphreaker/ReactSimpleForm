import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const INITIAL_STATE = {
    name: "",
    surname: "",
    adress: "",
    zip: "",
    about: ""
  };

  const [formFields, setFormFields] = useState(INITIAL_STATE);
  const [output, setOutput] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Send values to api
    setOutput(formFields);

    setFormFields(INITIAL_STATE);
  };

  return (
    <>
      <div className="container">
        <h1>Simple Form Example</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={formFields.surname}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label>Adress</label>
            <input
              type="text"
              name="adress"
              value={formFields.adress}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label>Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formFields.zip}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label>Talk about you </label>
            <textarea
              type="text"
              name="about"
              value={formFields.about}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Send</button>
        </form>
        <div>{JSON.stringify(output)}</div>
      </div>
    </>
  );
}
