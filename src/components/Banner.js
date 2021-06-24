import React from 'react'

const pronunciationStyle = {
    fontSize: "25%",
    fontWeight: "100",
    display: "block",
};  

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>My name is Gem Kosan <span style={pronunciationStyle}>(pronounced <em>JEM koh-SHAWN</em>)</span></h1>
                <p>I'm a frontend developer with a focus on creating usable UIs with React.</p>
                <br />
                <p>I develop web pages using modern technologies like JavaScript, React, HTML5, and CSS3.</p>
                <p>After a foray into UX design, I've returned to web development with a new focus towards usability and accessibility.</p>
            </header>
            <div className="content">
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Check out my projects</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
