import React from 'react'
import { DarkmodeToggle } from '../components/toggle/darkmodeToggle'
import { MoonIcon, SunIcon } from '../assets/icons/toggleIcons'

export default (): JSX.Element => (
  <div>
    <h2>this is about page</h2>
    
    <DarkmodeToggle 
      checked={<SunIcon/>}
      unchecked={<MoonIcon/>}
    />



  </div>
)
