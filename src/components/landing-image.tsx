import desk from '../images/desk3.png'
import { DeveloperTyped } from '.'
import { useState } from 'react'

export const ScrollIcon = () => (
  <a href='#about-me'>
    <div className='chevron'></div>
    <div className='chevron'></div>
    <div className='chevron'></div>
  </a>
)
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
      {startTyping ? (
        <>
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
        <div
        style={{
          position: 'absolute',
          top: '80%',
          left: '50%'
        }}>
<ScrollIcon />
        </div>
        
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default LandingImage
