import React from 'react'
import {RiLink} from 'react-icons/ri'

function Project(props) {
  const image = props.project.imgUrl

    return(
        <article class="projects__card">
              <img
                src={image}
                alt=""
                className="projects__img"
              />

              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">{props.project.subtitle}</span>
                  <h3 className="projects__title">{props.project.title}</h3>
                  <a
                    href={props.project.projectUrl}
                    className="projects__button button button__small"
                    target="_blank"
                  >
                    <RiLink />
                  </a>
                </div>
              </div>
        </article>
    )
}

export default Project
