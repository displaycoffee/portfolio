/* React */
import React from 'react';

/* Local styles */
import './styles/resume.scss';

/* Local scripts */
import { resume } from './scripts/resume';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Resume = () => {
	const { technical, history, volunteer } = resume;
	const { languages, cms, tools, other } = technical;

	return (
		<>
			<HeaderIcon>Resume</HeaderIcon>

			<div className="resume-section resume-note spacing-reset">
				<p>
					<strong>Note</strong> - If you're looking for an alternate version of this resume,{' '}
					<a href="/assets/documents/adria-murphy-resume.pdf" target="_blank" rel="noreferrer">
						grab the downloadable pdf
					</a>
					.
				</p>
			</div>

			<div className="resume-section resume-skills spacing-reset">
				<HeaderIcon tag={'h3'}>Skills</HeaderIcon>

				{languages && languages.length !== 0
					? languages.map((value) => <ResumeSkillBar key={value.id} name={value.name} outOf={value.value} />)
					: null}
			</div>

			<div className="resume-section resume-inventory">
				<HeaderIcon tag={'h3'}>Inventory</HeaderIcon>

				<div className="row row-wrap row-spacing-20">
					{tools && (
						<div className="column">
							<h4 className="h-remove-shadow">Weapons</h4>
							<p>{tools}</p>
						</div>
					)}
					{cms && (
						<div className="column">
							<h4 className="h-remove-shadow">Armor</h4>
							<p>{cms}</p>
						</div>
					)}
					{other && (
						<div className="column">
							<h4 className="h-remove-shadow">Items</h4>
							<p>{other}</p>
						</div>
					)}
				</div>
			</div>

			<div className="resume-section resume-story-quests spacing-reset">
				<HeaderIcon tag={'h3'}>Story Quests</HeaderIcon>

				{history && history.length !== 0
					? history.map((value) => (
							<React.Fragment key={value.id}>
								<dl className="definition-list">
									<div className="definition-list-item">
										<dt>Name</dt>
										<dd>{value.name}</dd>
									</div>

									<div className="definition-list-item">
										<dt>Date</dt>
										<dd>{value.date}</dd>
									</div>

									<div className="definition-list-item">
										<dt>Role</dt>
										<dd dangerouslySetInnerHTML={{ __html: value.role }}></dd>
									</div>

									<div className="definition-list-item">
										<dt>Objectives</dt>
										<dd>
											<ul>
												{value.description.map((content, index) => (
													<li key={index}>
														{index == value.description.length - 1 ? (
															<>
																<strong>Inventory</strong> -&nbsp;
															</>
														) : null}
														{content}
													</li>
												))}
											</ul>
										</dd>
									</div>
								</dl>
							</React.Fragment>
						))
					: null}
			</div>

			<div className="resume-section resume-side-quests spacing-reset">
				<HeaderIcon tag={'h3'}>Side Quests</HeaderIcon>

				{volunteer && volunteer.length !== 0
					? volunteer.map((value) => (
							<React.Fragment key={value.id}>
								<dl className="definition-list">
									<div className="definition-list-item">
										<dt>Name</dt>
										<dd>{value.name}</dd>
									</div>

									<div className="definition-list-item">
										<dt>Date</dt>
										<dd>{value.date}</dd>
									</div>

									<div className="definition-list-item">
										<dt>Objectives</dt>
										<dd>
											<ul>
												{value.description.map((content, index) => (
													<li key={index}>{content}</li>
												))}
											</ul>
										</dd>
									</div>
								</dl>
							</React.Fragment>
						))
					: null}
			</div>
		</>
	);
};

export const ResumeSkillBar = (props: ObjectPrimitiveProps) => {
	const { name, outOf } = props;
	const outOfPercent = (outOf as number) * 10;

	return (
		<div className="skill-bar flex-wrap flex-align-items-center">
			<div className="skill-bar-name">{name}</div>

			<div className="skill-bar-progress pixel-border-rounded">
				<div className="skill-bar-total"></div>
				<div className="skill-bar-out-of" style={{ width: `${outOfPercent}%` }}></div>
			</div>
		</div>
	);
};
