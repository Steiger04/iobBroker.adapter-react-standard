import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

import MainNavigation from "./MainNavigation";
import {NativeContext} from "../../App";
import Logo from "@iobroker/adapter-react/Components/Logo";

const styles = (_theme) => ({});

class Layout extends Component {
	static contextType = NativeContext;

	render() {
		const {children} = this.props;
		const {native, that} = this.context;

		return (
			<>
				<Grid
					spacing={3}
					container
					direction="column"
				>
					<Grid item container>
						<Grid item xs={12}>
							<header>
								<Logo
									instance={that.instance}
									common={that.common}
									native={native}
									onError={text => that.setState({errorText: text})}
									onLoad={that.onLoadConfig.bind(that)}
								/>
								<MainNavigation/>
							</header>
						</Grid>
					</Grid>

					<Grid item container>
						<Grid item xs={12}>
							<main>{children}</main>
						</Grid>
					</Grid>

					<Grid item container>
						<Grid item xs={12}>
							<footer>
								{that.renderError.bind(that)()}
								{that.renderToast.bind(that)()}
								{that.renderSaveCloseButtons.bind(that)()}
							</footer>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default withStyles(styles)(Layout);
