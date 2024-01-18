import React from 'react'
import '../stylesheets/screenCard.css'

const ScreenCard = ({screenName, screenDesc}) => {
  return (
    <>
        <div className="screen__card">
            <div className="screen__card__strip">
                {screenName}
            </div>
            <p>{screenDesc}</p>
        </div>
    </>
  )
}

export default ScreenCard