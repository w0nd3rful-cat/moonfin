import React, { useState } from 'react';

const Addtrade = () => {
	const [text, setText] = useState('');
	const [price, setPrice] = useState('');

	const onChangeName = (e) => {
		setText(e.target.value);
	};

	const onChangePrice = (e) => {
		setPrice(e.target.value);
	};

	return (
		<div>
			<form>
				<input
					type='text'
					name='text'
					placeholder='Add name'
					value={text}
					onChange={onChangeName}
				/>
				<input
					type='number'
					name='number'
					placeholder='Add price'
					value={price}
					onChange={onChangePrice}
				/>
			</form>
		</div>
	);
};

export default Addtrade;
