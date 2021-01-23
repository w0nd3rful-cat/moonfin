import React, { useState } from 'react';

const Addtrade = () => {
	const [stock, setStock] = useState('');
	const [priceBuy, setPriceBuy] = useState('');
	const [priceSell, setPriceSell] = useState('');
	const [fees, setFees] = useState('');

	const onChangeStock = (e) => {
		setStock(e.target.value);
	};

	const onChangePriceBuy = (e) => {
		setPriceBuy(e.target.value);
	};

	const onChangePriceSell = (e) => {
		setPriceSell(e.target.value);
	};

	const onChangeFees = (e) => {
		setFees(e.target.value);
	};

	return (
		<div>
			<form className='rukas'>
				<label>
					Stock :
					<input
						type='text'
						name='text'
						placeholder='Add stock'
						value={stock}
						onChange={onChangeStock}
					/>
				</label>
				<label>
					Price Buy:
					<input
						type='number'
						name='number'
						placeholder='Add price'
						value={priceBuy}
						onChange={onChangePriceBuy}
					/>
				</label>
				<label>
					Price Sell:
					<input
						type='number'
						name='number'
						placeholder='Add price'
						value={priceSell}
						onChange={onChangePriceSell}
					/>
				</label>
				<label>
					Fees :
					<input
						type='number'
						name='number'
						placeholder='Add price'
						value={fees}
						onChange={onChangeFees}
					/>
				</label>
				<input type='submit' value='Submit' className='pzdc' />
			</form>
		</div>
	);
};

export default Addtrade;
