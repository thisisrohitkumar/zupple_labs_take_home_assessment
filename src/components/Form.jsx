import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/form.css";
const Form = () => {
  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  const [successMsg, setSuccessMsg] = useState("");

  const [formValues, setFormValues] = useState({
    authKey: "",
    title: "",
    desc: "",
    tags: "",
    date: "",
    software: "sketch",
    image: null,
    file: null,
    imageName: "No file uploaded",
    fileName: "No file uploaded",
  });

  const [formErrors, setFormErrors] = useState({
    authKey: "",
    title: "",
    desc: "",
    tags: "",
    date: "",
    software: "",
    image: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormValues({
        ...formValues,
        [name]: files[0],
        [`${name}Name`]: files[0].name,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }

    // Clearing the corresponding error when the user makes a change
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  // A function to check date format entered by the user
  const isValidDateFormat = (dateString) => {
    const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    return dateRegex.test(dateString);
  };

  // A function to check tags format entered by the user
  const isCommaSeparated = (tags) => {
    const commaSeparatedRegex = /^(\s*[^,\s]+\s*,\s*)*[^,\s]+\s*$/;

    return commaSeparatedRegex.test(tags);
  };

  //A function to validate form
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.authKey) {
      errors.authKey = "Authentication Key is required!";
      isValid = false;
    } else if (formValues.authKey.length < 10) {
      errors.authKey = "Min. 10 chars allowed!";
      isValid = false;
    }

    if (!formValues.title) {
      errors.title = "Title is required!";
      isValid = false;
    }

    if (!formValues.desc) {
      errors.desc = "Description is required!";
      isValid = false;
    }

    if (formValues.desc.length > 250) {
      errors.desc = "Too long (Max. 250 chars allowed)!";
      isValid = false;
    }

    if (!formValues.tags) {
      errors.tags = "Tags are required!";
      isValid = false;
    } else if (!isCommaSeparated(formValues.tags)) {
      errors.tags = "Tags must be comma separated!";
      isValid = false;
    }

    if (!formValues.date) {
      errors.date = "Date is required!";
      isValid = false;
    } else if (!isValidDateFormat(formValues.date)) {
      console.log(formValues.date);
      errors.date = "Invalid date format!";
      isValid = false;
    }

    if (!formValues.software) {
      errors.software = "Select a software!";
      isValid = false;
    }

    if (!formValues.image) {
      errors.image = "Image is required!";
      isValid = false;
    }

    if (!formValues.file) {
      errors.file = "File is required!";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(async () => {
      if (validateForm()) {
        try {
          const apiUrl =
            "https://65ad0918adbd5aa31bdff671.mockapi.io/api/v1/data"; //mockAPI URL

          // Data to be sent
          const formData = new FormData();
          formData.append("authKey", formValues.authKey);
          formData.append("title", formValues.title);
          formData.append("desc", formValues.desc);
          formData.append("tags", formValues.tags);
          formData.append("date", formValues.date);
          formData.append("software", formValues.software);
          formData.append("image", formValues.image);
          formData.append("file", formValues.file);

          // Generating POST request using Axios
          const response = await axios.post(apiUrl, JSON.stringify(formData));

          if (response.status === 201) {
            setSubmitBtnText("Submit");
            setSuccessMsg("Form Submitted Successfully!");

            // Resetting form values
            setFormValues({
              authKey: "",
              title: "",
              desc: "",
              tags: "",
              date: "",
              software: "sketch",
              image: null,
              file: null,
              imageName: "No file uploaded",
              fileName: "No file uploaded",
            });
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setSubmitBtnText("Submit");
        }
      } else {
        setSubmitBtnText("Submit");
      }
    }, 1000);

    setSubmitBtnText("Submitting...");
  };

  const closeSuccessMsg = () => {
    setSuccessMsg("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* success msg container */}
        <div
          className={
            successMsg != "" ? "success__msg__show" : "success__msg__hide"
          }
        >
          <p>{successMsg}</p>
          <button type="button" id="closeBtn" onClick={closeSuccessMsg}>
            &#10005;
          </button>
        </div>
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
                  rows="9"
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
                  placeholder="DD/MM/YYYY"
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
              <button type="submit">{submitBtnText}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
