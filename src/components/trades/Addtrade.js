import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Addtrade = () => {
	const [stock, setStock] = useState('');
	const [alert, setAlert] = useState('');

	const onChangeStock = (e) => {
		setStock(e.target.value);
	};

	const newTrade = (e) => {
		e.preventDefault();

		if (stock) localStorage.setItem(uuidv4(), stock);
		else {
			setAlert('Eik nx ivesk kazka');
			setTimeout(function () {
				setAlert('');
			}, 1500);
		}
		setStock('');
	};

	return (
		<div>
			{alert}
			<form onSubmit={newTrade} className='rukas'>
				<label>
					Stock : &nbsp; &nbsp; &nbsp;
					<input
						type='text'
						name='text'
						placeholder='Add stock'
						value={stock}
						onChange={onChangeStock}
					/>
				</label>

				<input type='submit' value='Submit' className='pzdc' />
			</form>
		</div>
	);
};

export default Addtrade;
