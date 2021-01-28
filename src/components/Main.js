import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Addtrade from './trades/Addtrade';
import List from './trades/List';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/addtrade' component={Addtrade} />
				<Route exact path='/' component={List} />
			</Switch>
		</div>
	);
};

export default Main;
