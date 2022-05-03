import React from 'react'
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiAccountBoxLine } from 'react-icons/ri'

function Social() {
    const social = [
        {id: 'Github', url: 'https://github.com/rglanz', icon: RiGithubLine},

        {id: 'LinkedIn',
         url: 'https://www.linkedin.com/in/ryan-glanz-172974118/',
         icon: RiLinkedinLine},

        {id: 'Upwork',
         url: 'https://www.upwork.com/freelancers/~01de154ab22e88e507',
         icon: RiAccountBoxLine},

        {id: 'Mail', url: 'mailto:glanzrm@gmail.com', icon: RiMailLine},
    ]

    const socialArray = social.map(icon => {
        return(
            <a
                href={icon.url}
                target='_blank'
                className="profile__social-link"
            >
                <icon.icon />
            </a>
        )
        
    })

    return(
        <ul className="profile__social">
            {socialArray}
        </ul>
    )
}

export default Social
