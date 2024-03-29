import React from "react";
import { Link } from "gatsby";
import projSodaPop from "../assets/images/soda-pop-screen.png";
import projBooks from "../assets/images/proj-books.png";
import projCSC from "../assets/images/proj-csc.png";

const Gallery = (props) => (
	<section id="gallery">
		<section id="one" className="tiles inner">
			<article style={{ backgroundImage: `url(${projSodaPop})` }}>
				<header className="major">
					<h3>Soda POP!</h3>
					<p>
						A simple game were you pop bubbles with song lyrics. Created in vanilla JavaScript, CSS, and HTML. No JS libraries except sound, which uses howler.js.
					</p>
				</header>
				<Link
					to="https://soda-pop.netlify.app/"
					className="link primary"
				><span class="sr-only">Soda Pop!</span></Link>
			</article>
			<article style={{ backgroundImage: `url(${projCSC})` }}>
				<header className="major">
					<h3>Cost Savings Calculator</h3>
					<p>
						A multi-page survey I built for a previous employer. Uses React and processes JSX at run-time.
					</p>
				</header>
				<Link
					to="https://cost-savings-calculator.netlify.app/"
					className="link primary"
				><span class="sr-only">Cost Savings Calculator</span></Link>
			</article>
			<article style={{ backgroundImage: `url(${projBooks})` }}>
				<header className="major">
					<h3>Book Search</h3>
					<p>
						A small project using Bootstrap 4, React and the Google Books
						API
					</p>
				</header>
				<Link
					to="https://gk-books.netlify.app/"
					className="link primary"
				><span class="sr-only">Book Search</span></Link>
			</article>
			<article>
				<header className="major">
					<p>More to come...</p>
				</header>
			</article>
		</section>
	</section>
);

export default Gallery;
