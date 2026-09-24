/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { cheatCodesOptionsBody } from '../../scripts/cheat-codes-options';

/* Components */
import { CheatCodesSection } from '../../-CheatCodes';
import { Contents } from '../../../../components/contents/Contents';
import { LinkExternal, List, ListItem } from '../../../../components/blocks/Blocks';

export const Route = createLazyFileRoute('/cheat-codes/(children)/wordpress-block-preview/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Contents {...cheatCodesOptionsBody}>
			<CheatCodesSection header={'Information'}>
				<List variant={'dl'}>
					<ListItem term={'Skill level'}>Easy</ListItem>
					<ListItem term={'Languages'}>HTML, CSS, WordPress</ListItem>
					<ListItem term={'Responsive'}>Yes</ListItem>
					<ListItem term={'Note'}>For more information on how to use this snippet, visit the repo link below.</ListItem>
				</List>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href={'//github.com/displaycoffee/wordpress-block-preview'}>View @ displaycoffee</LinkExternal>
				</p>
			</CheatCodesSection>
		</Contents>
	);
}
