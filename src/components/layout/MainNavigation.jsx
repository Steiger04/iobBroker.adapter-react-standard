import React, {Component} from "react";
import {Route, Link, Redirect} from "react-router-dom";
import {Tabs, Tab, AppBar, Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = (_theme) => ({});

const routes = ["/settings-1", "/settings-2"];

class MainNavigation extends Component {
	render() {
		return (
			<>
				<Redirect from="/" to={routes[0]} exact/>
				<Route path="/" render={(history) => (
					<AppBar position="relative">
						<Paper
							square
						>
							<Tabs
								value={history.location.pathname !== "/" ? history.location.pathname : false}
								indicatorColor="primary"
								textColor="primary"
								variant="fullWidth"
							>
								<Tab label="Settings 1" value={routes[0]} component={Link} to={routes[0]}/>
								<Tab label="Settings 2" value={routes[1]} component={Link} to={routes[1]}/>
							</Tabs>
						</Paper>
					</AppBar>
				)}/>
			</>
		);
	}
}

export default withStyles(styles)(MainNavigation);
