import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import theme from "@iobroker/adapter-react/Theme";
import Utils from "@iobroker/adapter-react/Components/Utils";
import App from "./App";

import Layout from "./components/layout/Layout";
import Settings1Page from "./pages/Settings1Page";
import Settings2Page from "./pages/Settings2Page";

let themeName = Utils.getThemeName();

function build() {
	ReactDOM.render(
		<MuiThemeProvider theme={theme(themeName)}>
			<Paper square style={{height: "100vH"}}>
				<App
					adapterName="adapter-react-standard"
					onThemeChange={(_theme) => {
						themeName = _theme;
						build();
					}}
				>
					<BrowserRouter>
						<Layout>
							<Switch>
								<Route path="/settings-1" exact>
									<Settings1Page/>
								</Route>
								<Route path="/settings-2" exact>
									<Settings2Page/>
								</Route>
							</Switch>
						</Layout>
					</BrowserRouter>
				</App>
			</Paper>
		</MuiThemeProvider>,
		document.getElementById("root"),
	);
}

build();
