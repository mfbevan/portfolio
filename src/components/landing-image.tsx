import desk from '../images/desk3.png'
import { DeveloperTyped } from '.'

export const LandingImage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          height: 'auto',
          width: '100%',
          display: 'block'
        }}
        src={desk}
        alt='Desk'
      />
      <div
        style={{
          position: 'absolute',
          color: 'white',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <DeveloperTyped />
      </div>
    </div>
  )
}

export default LandingImage
