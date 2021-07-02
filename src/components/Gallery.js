import React from "react";
import { Link } from "gatsby";
import projBooks from "../assets/images/proj-books.png";

const Gallery = (props) => (
	<section id="gallery">
		<section id="one" className="tiles inner">
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
