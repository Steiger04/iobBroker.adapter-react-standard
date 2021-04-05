import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

import IbrSettings from "../components/settings/IbrSettings";

const styles = (_theme) => ({});

class Settings1Page extends Component {
	render() {
		return (
			<IbrSettings/>
		);
	}
}

export default withStyles(styles)(Settings1Page);
