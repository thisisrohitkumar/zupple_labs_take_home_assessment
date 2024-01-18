import React from 'react'
import '../stylesheets/screen1.css'
import blob1 from '../assets/blobs/blob1.png'
import blob2 from '../assets/blobs/blob2.png'
import blob3 from '../assets/blobs/blob3.png'
import Form from '../components/Form'

const Screen1 = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="screen1__container">
          <div className="form__container">
            <p className='form__sub__heading'>UIDesignDaily</p>
            <h4 className='form__heading'>Upload Files</h4>
            <Form />
          </div>
          <div className="blob1">
            <img src={blob1} alt="Blob 1" />
          </div>
          <div className="blob2">
            <img src={blob2} alt="Blob 2" />
          </div>
          <div className="blob3">
            <img src={blob3} alt="Blob 3" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Screen1