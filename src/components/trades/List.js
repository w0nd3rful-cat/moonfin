import React from 'react';

const List = () => {
	const entries = Object.entries(localStorage);

	const deleteStock = () => {};

	return (
		<div>
			{entries.map((x) => {
				return <h1 key={x[0]}>{x[1]}</h1>;
			})}
		</div>
	);
};

export default List;
