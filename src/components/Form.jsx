import React, { useState, useEffect } from "react";
import "../stylesheets/form.css";
const Form = () => {
  const initialValues = {
    authKey: "",
    title: "",
    desc : "",
    tags : ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit is clicked");
    setFormErrors(validateForm(formValues))
    setIsSubmit(true)
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //for email validation

    if (!values.authKey) {
      errors.authKey = "Invalid Auth Key!";
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

    return errors
  }

  return (
    <>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form__grid">
          <div className="form__grid__row1">
            <div className="form__grid__column1">
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
                <small id="authError">{formErrors.authKey}</small>
              </div>

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
                <small id="titleError">{formErrors.title}</small>
              </div>

              <div className="form__field">
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  id=""
                  rows="8"
                  placeholder="Description"
                  value={formValues.desc}
                  onChange={handleChange}
                ></textarea>
                <small id="descError">{formErrors.desc}</small>
              </div>
            </div>
            <div className="form__grid__column2">
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
                <small id="tagsError">{formErrors.tags}</small>
              </div>

              <div className="form__field">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="DD/MM/YY"
                />
                <small id="dateError">Date Is Required!</small>
              </div>

              <div className="form__field">
                <label htmlFor="software">Software</label>
                <select name="software" id="software">
                  <option value="sketch">Sketch</option>
                  <option value="figma">Figma</option>
                  <option value="illustrator">Illustrator</option>
                </select>
                <small id="softwareError">Please Select Software!</small>
              </div>
              <div className="form__field custom-file">
                <span>
                  <label>Thumbnail Image</label>
                  <label htmlFor="image" className="custom-file-upload">
                    Upload File
                  </label>
                  <input type="file" name="image" id="image" />
                  <p id="fileError">No file uploaded</p>
                </span>
                <span>
                  <label>Source File</label>
                  <label htmlFor="file" className="custom-file-upload">
                    Upload File
                  </label>
                  <input type="file" name="file" id="file" />
                  <p id="fileError">No file uploaded</p>
                </span>
              </div>
            </div>
          </div>
          <div className="form__grid__row2">
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
