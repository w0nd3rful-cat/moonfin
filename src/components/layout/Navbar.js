import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	overrides: {
		backgroundColor: 'teal',
	},
	lol: {
		color: 'inherit',
		textDecoration: 'none',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.overrides}>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<Link to='/' className={classes.lol}>
							<HomeRoundedIcon />
						</Link>
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						Journal
					</Typography>
					<IconButton color='inherit' aria-label='menu'>
						<Link to='/addtrade' className={classes.lol}>
							<AddIcon />
						</Link>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
