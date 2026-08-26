/* Components */
import { CheatCodesSection } from '../../CheatCodes';
import { LinkExternal, List, ListItem } from '../../../../components/blocks-2/Blocks';

export const Burmecia = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<List variant="dl">
					<ListItem term="Skill level">Medium</ListItem>
					<ListItem term="Languages">React, TypeScript, JavaScript, Sass</ListItem>
					<ListItem term="Responsive">Yes</ListItem>
					<ListItem term="Note">For more information on how to use this framework, visit the repo link below.</ListItem>
				</List>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/burmecia">View @ displaycoffee</LinkExternal>
				</p>
			</CheatCodesSection>
		</>
	);
};
