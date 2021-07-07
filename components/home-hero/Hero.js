/* eslint-disable @next/next/no-img-element */
import heroStyles from '../../styles/Hero.module.scss'
export const Hero = ({ headerTitle, headerSubTitle, headerBackground}) => {
  return (
    <div className={heroStyles.hero} style={{ 
      backgroundImage: `url(${headerBackground.url})` 
    }}>
      <h1 className={heroStyles.title}>{headerTitle}</h1>
      <h2 className={heroStyles.subtitle}>{headerSubTitle}</h2>
    </div>
  )
}

export default Hero