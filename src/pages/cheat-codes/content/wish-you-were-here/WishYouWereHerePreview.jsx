/* Local styles */
import './styles/wish-you-were-here.scss';

export const WishYouWereHere = () => {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Damion&family=Lato:wght@400;700&display=swap" rel="stylesheet" />

			<div className="dc-wish-you-were-here displaycoffee">
				<header className="dc-wish-you-were-here-banner">
					<h3 className="dc-wish-you-were-here-title">Wish you were here...</h3>
					<div className="dc-wish-you-were-here-circles"></div>
				</header>

				<main className="dc-wish-you-were-here-content">
					<div className="dc-wish-you-were-here-row">
						<div className="dc-wish-you-were-here-column dc-wish-you-were-here-column-01">
							<dl>
								<dt>Name:</dt>
								<dd>Beach Goer</dd>
								<dt>Gender:</dt>
								<dd>Unknown</dd>
								<dt>Location:</dt>
								<dd>Beachy Beachtown</dd>
								<dt>Occupation:</dt>
								<dd>Beach Bum</dd>
								<dt>Favorite Drink:</dt>
								<dd>Pineapple juice and vodka</dd>
								<dt>Favorite Song:</dt>
								<dd>Kokomo</dd>
								<dt>Another Field:</dt>
								<dd>Another answer</dd>
								<dt>Another Field:</dt>
								<dd>Another answer</dd>
								<dt>Another Field:</dt>
								<dd>Another answer</dd>
							</dl>
							<p>
								<a href="/">Link 01</a>
								<span className="dc-wish-you-were-here-separator"></span>
								<a href="/">Link 02</a>
								<span className="dc-wish-you-were-here-separator"></span>
								<a href="/">Link 03</a>
							</p>
						</div>

						<div className="dc-wish-you-were-here-column dc-wish-you-were-here-column-02">
							<h4 className="dc-wish-you-were-here-title">Biography</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor omnis est quam accusantium! Ut corporis consequatur,{' '}
								<a href="/">nisi assumenda veniam</a>, necessitatibus. Obcaecati porro optio fuga quod itaque, quibusdam odit qui
								nobis.
							</p>
							<p>
								Neque possimus ipsam quas, corporis vitae at illo, ullam culpa non tempora dicta modi quibusdam saepe ipsa corrupti.{' '}
								<a href="/">Quae</a> aliquid fuga reiciendis ipsam suscipit ex, nobis maiores excepturi, tempora. Ab.
							</p>
							<p>
								Recusandae a <a href="/">ipsum</a> impedit laborum fugiat nihil esse quis libero hic quidem sapiente delectus cum
								aliquid laudantium suscipit dolore, <a href="/">consectetur dolor</a> incidunt nam ipsa voluptas eius sunt mollitia.
								Sit, animi!
							</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};
