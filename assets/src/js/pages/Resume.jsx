/* React */
import React from 'react';

/* Local scripts */
import { pages } from '../scripts/pages';

export const Resume = () => {
	const { technical, history } = pages.resume;
	const { languages, cms, tools, other } = technical;

	return (
		<>
			<p>
				<strong>Note</strong> - If you're looking for a downloadable version of this resume, grab the pdf{' '}
				<a href="./assets/dist/documents/adria-murphy-resume.pdf" target="_blank">
					here
				</a>
				.
			</p>

			<h4>Skills</h4>

			{languages && languages.length !== 0
				? languages.map((language, index) => <ResumeSkillBar key={index} name={language.name} outOf={language.value} />)
				: null}

			<h4>Inventory</h4>

			<ul>
				{cms && (
					<li>
						<strong>Armor</strong> - {cms}
					</li>
				)}
				{tools && (
					<li>
						<strong>Weapons</strong> - {tools}
					</li>
				)}
				{other && (
					<li>
						<strong>Items</strong> - {other}
					</li>
				)}
			</ul>

			<h4>Quest Log</h4>

			{history && history.length !== 0
				? history.map((career, index) => (
						<React.Fragment key={index}>
							<p>
								<strong>Name</strong> - {career.name}
							</p>

							<p>
								<strong>Role</strong> - <span dangerouslySetInnerHTML={{ __html: career.role }}></span>
							</p>

							<p>
								<strong>Objectives</strong> -
							</p>

							<ul>
								{career.content.map((content, index) => (
									<li key={index}>
										{index == career.content.length - 1 ? (
											<>
												<strong>Inventory</strong> -&nbsp;
											</>
										) : null}
										{content}
									</li>
								))}
							</ul>
						</React.Fragment>
				  ))
				: null}
		</>
	);
};

export const ResumeSkillBar = (props) => {
	const { name, outOf } = props;

	return (
		<div className="skill-bar flex-wrap flex-align-items-center">
			<div className="skill-bar-name">{name}</div>

			<div className="skill-bar-progress pixel-border">
				<div className="skill-bar-total"></div>
				<div className="skill-bar-out-of" style={{ width: `${outOf * 10}%` }}></div>
			</div>
		</div>
	);
};
