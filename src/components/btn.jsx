import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
function Btn(props) {
  return (
    <div>


<div className="class-ofbtn">
<Link class="btn" to=''>{props.value}</Link>
</div>
    </div>
  )
}

export default Btn