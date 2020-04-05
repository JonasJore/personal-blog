import React from 'react'
import { DarkmodeToggle } from './toggle'
import { SunIcon, MoonIcon } from '../assets/icons/toggleIcons'

export const Header = () => (
  <div>
    <div className="headerSection">
      <div className="headerSection__heading">
        <h2>My Personal Blog</h2>
      </div>
      <div className="headerSection__darkmodeToggle">
        <DarkmodeToggle
          checked={<SunIcon />}
          unchecked={<MoonIcon />}
        />
      </div>
    </div>
  </div>
)