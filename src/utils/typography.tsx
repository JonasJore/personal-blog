import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = (): object => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography: Typography = new Typography(Wordpress2016)

// Hot reload if not in production
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
