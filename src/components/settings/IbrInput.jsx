import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core/styles";
import I18n from "@iobroker/adapter-react/i18n";

import {NativeContext} from "../../App";

const styles = (_theme) => ({
	input: {
		width: "100%",
	},
});

class IbrInput extends Component {
	static contextType = NativeContext;

	render() {
		const {classes} = this.props;
		const {native, updateNativeValue} = this.context;
		const {attr, type, title} = this.props;

		return (
			<TextField
				label={I18n.t(title)}
				className={classes.input}
				value={native[attr]}
				type={type || "text"}
				onChange={(e) => updateNativeValue(attr, e.target.value)}
				margin="normal"
			/>
		);
	}

}

export default withStyles(styles)(IbrInput);
