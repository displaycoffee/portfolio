/* Local components */
import { CheatCodesSection } from '../../CheatCodes';

export const Burmecia = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Medium</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>React, TypeScript, JavaScript, Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Note</dt>
						<dd>For more information on how to use this framework, visit the repo link below.</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/burmecia" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>
			</CheatCodesSection>
		</>
	);
};
