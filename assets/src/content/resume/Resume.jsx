/* React */
import React from 'react';

/* Local styles */
import './styles/resume.scss';

/* Local styles */
import { resume } from './scripts/resume';

export const Resume = () => {
	const { technical, history, volunteer } = resume;
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
				? languages.map((item) => <ResumeSkillBar key={item.id} name={item.name} outOf={item.value} />)
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
				? history.map((item) => (
						<React.Fragment key={item.id}>
							<p>
								<strong>Name</strong> - {item.name}
							</p>

							<p>
								<strong>Role</strong> - <span dangerouslySetInnerHTML={{ __html: item.role }}></span>
							</p>

							<p>
								<strong>Objectives</strong> -
							</p>

							<ul>
								{item.content.map((content, index) => (
									<li key={index}>
										{index == item.content.length - 1 ? (
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

			<h4>Side Quests</h4>

			{volunteer && volunteer.length !== 0
				? volunteer.map((item) => (
						<React.Fragment key={item.id}>
							<p>
								<strong>Name</strong> - {item.name}
							</p>

							<p>
								<strong>Date</strong> - {item.date}
							</p>

							<p>
								<strong>Objectives</strong> -
							</p>

							<ul>
								{item.content.map((content, index) => (
									<li key={index}>{content}</li>
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
