import React from 'react';

const RandomPersons = ({ user }: { user: { name: string | null, image: string | undefined } }) => {
	const { name, image } = user
	return (
		<>
			<style>
				{`
					.custom-element-holder{
						position: fixed;
						right: 20px;
						top: 20px;
						background: var(--color-secondary-accent);
						border-left: 4px solid var(--color-secondary);
						padding: 0.1rem 0.8rem;
					}
				`}
			</style>
			<section>
				<h1>Custom Element:<br/>"random-persons"</h1>
				{image && <img alt={name ? name : 'image'} src={image} />}
					<h3>{name}</h3>
			</section>
		</>
	);
};

export default RandomPersons;