import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = (_theme) => ({});

class Settings2Page extends Component {
	render() {
		return (
			<Grid container justify="center">
				<Grid item>
					<h3>Settings 2</h3>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Settings2Page);
