/* Local styles */
import './styles/dragony-preview.scss';

export const Dragony = () => {
	return (
		<div className="dc-dragony displaycoffee">
			<header className="dc-dragony-header">
				<h3>Toothless</h3>
				<div className="dc-dragony-banner">
					<img
						src="//display.coffee/assets/images/cheat-codes/dragony-banner.gif"
						alt="Dragony - Banner"
						title="Dragony - Banner"
						width="490"
						height="230"
					/>
				</div>
			</header>

			<main className="dc-dragony-content">
				<h4>Loves</h4>
				<p>
					Flying and exploring! It's one of my specialties. I do enjoy living in Berk with the rest of the vikings though. Also, chasing
					little colored lights!
				</p>
				<h4>Hates</h4>
				<p>
					People who hurt my friends. I'm incredibly loyal and would do anything to protect my friends. Oh, and eel is bad too. If you give
					me eel for dinner, I'll spit it out.
				</p>
				<h4>Friends</h4>
				<p>Hiccup Horrendous Haddock III, Astrid Hofferson, Stoick the Vast, Valka, etc etc etc...</p>
				<h4>Enemies</h4>
				<p>Drago Bludvist, etc etc etc...</p>
			</main>

			<footer className="dc-dragony-footer">
				<p>
					<a href="/">Link 1</a>
					<span className="dc-dragony-separator">|</span>
					<a href="/">Link 2</a>
					<span className="dc-dragony-separator">|</span>
					<a href="/">Link 3</a>
				</p>
			</footer>
		</div>
	);
};
