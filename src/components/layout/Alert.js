import React from 'react'

// alert is passed as a prop
 const Alert = ({alert}) => {
    return (
      alert !== null && (
        //   there is an alert that is being passed as a prop
        //which goes into the css file and extract the proper class name
          <div className={`alert alert-${alert.type}`}>
              <i className="fas fa-info-circle"></i> {alert.msg}
          </div>
      )
    )
}

export default Alert;
