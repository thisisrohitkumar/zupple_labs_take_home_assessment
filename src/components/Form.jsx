import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/form.css";
const Form = () => {

  const apiData = []
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit is clicked");
    // console.log(formValues);

    const errors = validateForm(formValues)
    setFormErrors(errors);
    setIsSubmit(true);
    console.log(errors)
    console.log(Object.keys(errors).length)
    if(Object.keys(errors).length === 0){
      // console.log(formValues);
      apiData.push(formValues)
      console.log(apiData)
      postFormDataToAPI(formValues)
    }
  };

  const postFormDataToAPI = async (formValues) => {
    const response = await axios.post('/sceen1', formValues)

    
    // if(response.status === 200){
    //   console.log('form submitted successfully')
    // }
  }

  // useEffect(() => {
  //   // console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validateForm = (values) => {
    const errors = {};

    if (!values.authKey) {
      errors.authKey = "Invalid Auth Key!";
    } else if (values.authKey.length < 10) {
      errors.authKey = "Auth Key Must Be 10 Char Long!";
    }
    if (!values.title) {
      errors.title = "Title is Required!";
    }
    if (!values.desc) {
      errors.desc = "Description is Required!";
    }
    if (!values.tags) {
      errors.tags = "Tags must be comma seperated!";
    }
    if (!values.date) {
      errors.date = "Invalid Date Format";
    }
    if (!values.software) {
      errors.software = "Software is Required!";
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
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form__grid">
          <div className="form__grid__row1">
            <div className="form__grid__column1">
              
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
                  aria-describedby="authError"
                />
                <small id="authError" className="error-message">
                  {formErrors.authKey}
                </small>
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
                  aria-describedby="titleError"
                />
                <small id="titleError" className="error-message">
                  {formErrors.title}
                </small>
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
                  aria-describedby="descError"
                ></textarea>
                <small id="descError" className="error-message">
                  {formErrors.desc}
                </small>
              </div>
            </div>
            <div className="form__grid__column2">

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
                  aria-describedby="tagsError"
                />
                <small id="tagsError" className="error-message">
                  {formErrors.tags}
                </small>
              </div>

              {/* Date */}
              <div className="form__field">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="DD/MM/YY"
                  value={formValues.date}
                  onChange={handleChange}
                  aria-describedby="dateError"
                />
                <small id="dateError" className="error-message">
                  {formErrors.date}
                </small>
              </div>

              {/* Software */}
              <div className="form__field">
                <label htmlFor="software">Software</label>
                <select
                  name="software"
                  id="software"
                  onChange={handleChange}
                  value={formValues.software}
                  aria-describedby="softwareError"
                >
                  <option value="sketch">Sketch</option>
                  <option value="figma">Figma</option>
                  <option value="illustrator">Illustrator</option>
                </select>
                <small id="softwareError" className="error-message">
                  {formErrors.software}
                </small>
              </div>

              {/* Image and File */}
              <div className="form__field custom-file">
                <span>
                  <label htmlFor="image">Thumbnail Image</label>
                  <label className="custom-file-upload">
                    Upload File
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={handleChange}
                      aria-describedby="fileError"
                    />
                  </label>
                  <p id="fileName" className="error-message">
                    {formValues.imageName}
                  </p>
                  <p id="fileError" className="error-message">
                    {formErrors.image}
                  </p>
                </span>

                <span>
                  <label htmlFor="file">Source File</label>
                  <label className="custom-file-upload">
                    Upload File
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                      aria-describedby="fileError"
                    />
                  </label>
                  <p id="fileName" className="error-message">
                    {formValues.fileName}
                  </p>
                  <p id="fileError" className="error-message">
                    {formErrors.file}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="form__grid__row2">

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
