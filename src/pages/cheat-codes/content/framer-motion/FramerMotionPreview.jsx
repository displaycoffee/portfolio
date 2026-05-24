/* React */
import { useState } from 'react';
import { motion } from 'framer-motion';

/* Local styles */
import './styles/framer-motion.scss';

/* Container details */
const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

/* Card states */
const card = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, backgroundColor: '#523526', transition: { duration: 0.45, ease: 'easeOut' } },
};

export const FramerMotion = (props) => {
	const { cards } = props;
	const [key, setKey] = useState(0);

	return (
		<div className="dc-framer-motion">
			<motion.div key={key} className="dc-framer-motion-row" variants={container} initial="hidden" animate="show">
				{cards.map((item) => (
					<motion.div
						className="dc-framer-motion-column dc-framer-motion-card"
						variants={card}
						whileHover={{ scale: 1.06, backgroundColor: '#704a37' }}
						whileTap={{ scale: 0.94, backgroundColor: '#2a1c15' }}
						transition={{ duration: 0.2 }}
						key={item.id}
					>
						<h4>{item.title}</h4>

						<p>{item.description}</p>
					</motion.div>
				))}
			</motion.div>

			<button className="dc-framer-motion-button" onClick={() => setKey((key) => key + 1)} type="button">
				Replay animation
			</button>
		</div>
	);
};
