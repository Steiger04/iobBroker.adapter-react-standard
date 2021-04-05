import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

import IbrCheckbox from "./IbrCheckbox";
import IbrInput from "./IbrInput";
import {Grid, Card, CardContent} from "@material-ui/core";

const styles = (_theme) => ({});

class IbrSettings extends Component {
	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={3}>
					<Card>
						<CardContent>
							<form>
								<IbrCheckbox title="option1" attr="option1"/>
								<IbrInput title="option2" attr="option2" type="text"/>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(IbrSettings);
