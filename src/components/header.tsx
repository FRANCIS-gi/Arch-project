// Importing React library
import React from 'react'

// Exporting a functional component named Header
export default function Header() {
  return (
    // JSX syntax for rendering HTML elements
    <div id="header">
         {/* The website logo with a link to the homepage */}
         <div><h5 id="logo"><a href="index.html">The Frank Design</a></h5></div>
        
         {/* Navigation bar */}
        <nav id="nav">
             {/* Unordered list for navigation items */}
            <ul>
                 {/* Navigation items with links to different sections of the website */}
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                 {/* The 'Contact' button with a primary class for styling */}
                <li><a href="#email" className="button primary">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}
