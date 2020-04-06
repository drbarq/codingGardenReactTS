import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { Container } from '@material-ui/core';

import Home from '../Home/index';

const App: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
							🍔
						</span>
					</IconButton>
					<Button component={Link} to="/" color="inherit">
						Home
					</Button>
					<Button component={Link} to="/about" color="inherit">
						About
					</Button>
				</Toolbar>
			</AppBar>
			<Container maxWidth="md">
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/about">
						<h1>About Page</h1>
					</Route>
					<Redirect to="/" />
				</Switch>
			</Container>
		</div>
	);
};

export default App;
