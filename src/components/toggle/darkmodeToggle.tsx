import React from 'react'
import Toggle from 'react-toggle'

type ToggleType = {
  checked: JSX.Element;
  unchecked: JSX.Element;
}

export const DarkmodeToggle = ({ checked, unchecked }: ToggleType): JSX.Element => (
  <label>
    <Toggle
      defaultChecked={false}
      icons={{
        checked,
        unchecked 
      }}
    />
  </label>
)