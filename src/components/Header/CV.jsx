import React from 'react'
import resume from '../../assets/pdf/Glanz_Resume.pdf'
import {RiDownloadLine} from 'react-icons/ri'

function CV() {
  return(
    <div className="profile__buttons">
          <a
            download=""
            href={resume}
            className="download-button"
          >
            Download CV
            
            <RiDownloadLine className="download-button-icon"/>
          </a>
    </div>
  )
}

export default CV
