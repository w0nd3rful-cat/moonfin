import React from 'react';

const keys = Object.keys(localStorage);

console.log(keys);

const items = Object.values({ ...localStorage });

console.log(items);

const List = () => {
	return (
		<div>
			{items.map((x) => {
				return <h1>{x}</h1>;
			})}
		</div>
	);
};

export default List;
