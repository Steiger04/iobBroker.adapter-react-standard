import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import I18n from "@iobroker/adapter-react/i18n";

import {NativeContext} from "../../App";

const styles = (_theme) => ({
	input: {
		width: "100%",
	},
});

class IbrSelect extends Component {
	static contextType = NativeContext;

	render() {
		const {native, updateNativeValue} = this.context;
		const {attr, style, title, options} = this.props;

		return (
			<FormControl
				className={`${this.props.classes.input}`}
				style={{
					paddingTop: 5,
					...style,
				}}
			>
				<Select
					value={native[attr] || "_"}
					onChange={(e) => updateNativeValue(attr, e.target.value === "_" ? "" : e.target.value)}
					input={<Input name={attr} id={attr + "-helper"}/>}
				>
					{options.map((item) => (
						<MenuItem key={"key-" + item.value} value={item.value || "_"}>
							{I18n.t(item.title)}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>Änderung von: {I18n.t(title)}</FormHelperText>
			</FormControl>
		);
	}
}

export default withStyles(styles)(IbrSelect);
