import React, {createContext} from "react";
import GenericApp from "@iobroker/adapter-react/GenericApp";
import {withStyles} from "@material-ui/core/styles";

const NativeContext = createContext({});

const styles = (_theme) => ({
	root: {},
});

class App extends GenericApp {
	constructor(props) {
		const extendedProps = {
			...props,
			encryptedFields: [],
			translations: {
				"en": require("./i18n/en.json"),
				"de": require("./i18n/de.json"),
				"ru": require("./i18n/ru.json"),
				"pt": require("./i18n/pt.json"),
				"nl": require("./i18n/nl.json"),
				"fr": require("./i18n/fr.json"),
				"it": require("./i18n/it.json"),
				"es": require("./i18n/es.json"),
				"pl": require("./i18n/pl.json"),
				"zh-cn": require("./i18n/zh-cn.json"),
			},
		};
		super(props, extendedProps);
	}

	onConnectionReady() {
		// executed when connection is ready
	}

	render() {
		if (!this.state.loaded) {
			return super.render();
		}

		const {children} = this.props;
		const {native} = this.state;
		const {updateNativeValue} = this;

		return (
			<>
				<NativeContext.Provider
					value={{
						native,
						updateNativeValue: updateNativeValue.bind(this),
						that: this,
					}}
				>
					{children}
				</NativeContext.Provider>
			</>
		);
	}

}

export default withStyles(styles)(App);
export {NativeContext};
