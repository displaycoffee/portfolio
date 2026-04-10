/* React */
import React, { useState } from 'react';

/* Local styles */
import './styles/hello-content-preview.scss';

export const HelloContent = (props) => {
	let { tabs, defaultTab } = props;
	const activeClass = 'dc-hello-content-active';
	const hasTabs = tabs && tabs.length !== 0 ? true : false;

	// Set default tab
	const defaultIndex = typeof defaultTab == 'undefined' ? 0 : defaultTab - 1;
	defaultTab = tabs[defaultIndex] ? defaultIndex : 0;
	const [activeTab, setActiveTab] = useState(defaultTab);

	return hasTabs ? (
		<div className="dc-hello-content-tabs displaycoffee">
			<div className="dc-hello-content-tabs-buttons">
				<ul className="dc-hello-content-tabs-list">
					{tabs.map((tab, index) => (
						<li key={index}>
							<button
								className={`dc-hello-content-button${index == activeTab ? ` ${activeClass}` : ``}`}
								type="button"
								aria-label={`${tab.label} button`}
								onClick={() => {
									// Update tab on click
									setActiveTab(index);
								}}
							>
								{tab.label}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className="dc-hello-content-tabs-content">
				{tabs.map((tab, index) => {
					const contentClass = `dc-hello-content-block${index == activeTab ? ` ${activeClass}` : ``}`;
					return (
						<React.Fragment key={index}>
							{tab.component ? (
								<div className={contentClass}>
									<tab.component />
								</div>
							) : (
								<div className={contentClass} dangerouslySetInnerHTML={{ __html: tab.content }}></div>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</div>
	) : null;
};
