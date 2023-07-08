import React from 'react'

export default function TextWall({text, img, top, left}) {
  return (
    <div className='' style={{ position: 'absolute', top: top, left: left, fontSize: '1em', transform: `translate3d(0,-100%,0)` }}>
      <div  style={{display:'flex', width:'1000px', color:'GrayText', }}>
          <p style={{width:'400px', margin:'30px'}}>
            {text}
          </p>
          <img width={'40%'} src={img}/>
      </div>
    </div>
  )
}
