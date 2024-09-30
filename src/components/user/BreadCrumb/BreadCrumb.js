import React from 'react'
import "./BreadCrumb.css"


const BreadCrumb = () => {
  return (
    <div className='BreadCrumb'>
        <h2>Freelancer Grid</h2>
        <div className='current-route'>
            <span>Home</span>
            <i class="bi bi-chevron-double-right"></i>
            <span className='active'>Developer</span>
        </div>
    </div>
  )
}

export default BreadCrumb