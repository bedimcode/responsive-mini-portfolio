import React from 'react'
import headshot from '../../assets/img/headshot.png'

function Profile() {

  return(
    <div class="profile__border">
      <div class="profile__perfil">
          <img src={headshot} alt="" />
       </div>
    </div>
  )
}

export default Profile
