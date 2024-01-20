import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/form.css";
const Form = () => {
  const apiData = [];
  const initialValues = {
    authKey: "",
    title: "",
    desc: "",
    tags: "",
    date: "",
    software: "Sketch",
    image: null,
    file: null,
    imageName: "No file uploaded",
    fileName: "No file uploaded",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: file,
        [`${name}Name`]: file.name,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // A function to handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   // console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // A function to validate form inputs
  const validateForm = (values) => {
    const errors = {};

    if (!values.authKey) {
      errors.authKey = "Authentication Key Is Required!";
    } else if (values.authKey.length < 10) {
      errors.authKey = "Key Must Be 10 Char Long!";
    }
    if (!values.title) {
      errors.title = "Title is Required!";
    }
    if (!values.desc) {
      errors.desc = "Description is Required!";
    }
    if (!values.tags) {
      errors.tags = "Tags are Required!";
    }
    if (!values.date) {
      errors.date = "Date Is Required!";
    }
    if (!values.software) {
      errors.software = "Software Is Required!";
    }
    if (!values.image) {
      errors.image = "Image Is Required!";
    }
    if (!values.file) {
      errors.file = "File Is Required!";
    }

    return errors;
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__grid">
          <div className="form__grid__row">
            <div className="form__grid__column">
              {/* Authentication Key */}
              <div className="form__field">
                <label htmlFor="authKey">Authentication Key</label>
                <input
                  type="password"
                  name="authKey"
                  id="authKey"
                  placeholder="Authentication Key"
                  value={formValues.authKey}
                  onChange={handleChange}
                />
                <small className="error">{formErrors.authKey}</small>
              </div>

              {/* Title */}
              <div className="form__field">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={formValues.title}
                  onChange={handleChange}
                />
                <small className="error">{formErrors.title}</small>
              </div>

              {/* Description */}
              <div className="form__field">
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  rows="8"
                  placeholder="Description"
                  value={formValues.desc}
                  onChange={handleChange}
                ></textarea>
                <small className="error">{formErrors.desc}</small>
              </div>
            </div>

            <div className="form__grid__column">
              {/* Tags */}
              <div className="form__field">
                <label htmlFor="tags">Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="Tags (comma separated)"
                  value={formValues.tags}
                  onChange={handleChange}
                />
                <small className="error">{formErrors.tags}</small>
              </div>

              {/* Date */}
              <div className="form__field">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="DD/MM/YY"
                  value={formValues.date}
                  onChange={handleChange}
                />
                <small className="error">{formErrors.date}</small>
              </div>

              {/* Software */}
              <div className="form__field">
                <label htmlFor="software">Software</label>
                <select
                  name="software"
                  id="software"
                  onChange={handleChange}
                  value={formValues.software}
                >
                  <option value="sketch">Sketch</option>
                  <option value="figma">Figma</option>
                  <option value="illustrator">Illustrator</option>
                </select>
                <small className="error">{formErrors.software}</small>
              </div>

              {/* Image and File */}
              <div className="form__field custom__file__field">
                <span>
                  <label htmlFor="image">Thumbnail Image</label>
                  <label className="custom__file__upload">
                    Upload File
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={handleChange}
                    />
                  </label>
                  <p id="fileName">{formValues.imageName}</p>
                  <p id="fileError">{formErrors.image}</p>
                </span>

                <span>
                  <label htmlFor="file">Source File</label>
                  <label className="custom__file__upload">
                    Upload File
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                    />
                  </label>
                  <p id="fileName">{formValues.fileName}</p>
                  <p id="fileError">{formErrors.file}</p>
                </span>
              </div>
            </div>
          </div>

          <div className="form__grid__row">
            {/* Submit Button */}
            <div className="form__submit">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
