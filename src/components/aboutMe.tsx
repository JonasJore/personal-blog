import React from 'react'
import { graphql } from 'gatsby'
import profile_picture from '../assets/profile_picture.jpg';

export const AboutMe = (): JSX.Element => (
  <div>
    <div className="aboutMe-container">
      <img 
        className="profilePicture"
        src={profile_picture} 
        alt="profile picture"
      />
    </div>
  </div>
)
