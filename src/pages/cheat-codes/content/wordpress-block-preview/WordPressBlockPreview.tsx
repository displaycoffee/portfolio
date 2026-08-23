/* Components */
import { CheatCodesSection } from '../../CheatCodes';
import { LinkExternal } from '../../../../components/blocks-2/Blocks';

export const WordPressBlockPreview = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Easy</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML, CSS, WordPress</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Note</dt>
						<dd>For more information on how to use this snippet, visit the repo link below.</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/wordpress-block-preview">View @ displaycoffee</LinkExternal>
				</p>
			</CheatCodesSection>
		</>
	);
};
