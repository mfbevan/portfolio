import desk from '../images/desk3.png'
import { DeveloperTyped } from '.'
import { useState } from 'react'

export const LandingImage = () => {
  const [startTyping, setStartTyping] = useState(false)

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
        onLoad={() => setStartTyping(true)}
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
        {startTyping ? <DeveloperTyped /> : ''}
      </div>
    </div>
  )
}

export default LandingImage
