import React from 'react'
import './rocker.css'

function Rocker(props) {
    return(
        <section className="filter__container">
            <ul className={`filters__content${props.isDarkMode ? '-dark': ''}`}>
                {props.showSkills ? (
                    <button
                        className="filters__button"
                        onClick={props.onClick}
                    >
                        Projects
                    </button>
                ) : (
                    <button
                        className="filters__button filter-tab-active"
                    >
                        Projects
                    </button>
                )}

                {props.showSkills ? (
                    <button
                        className="filters__button filter-tab-active"
                    >
                        Skills
                    </button>
                ) : (
                    <button
                        className="filters__button"
                        onClick={props.onClick}
                    >
                        Skills
                    </button>
                )}
            </ul>
        </section>
    )
}

export default Rocker
