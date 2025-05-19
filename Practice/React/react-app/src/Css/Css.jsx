import React from 'react'
import "./style.css"

function Css() {

    let css = {
        background : "blue",
        color: "red"
    }
    let data = <div>
        <ul style={{listStyle: "none"}}>List
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
  return (
    <div>
        <h1 style={css}>This is CSS file</h1>

        <h2 className='htag'>This is h2 tag</h2>

        <h1>Parate Dhvanit</h1>

        {data}
    </div>
  )
}

export default Css