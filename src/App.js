import React from "react";
import GlobalStyle from "./theme/globalStyles";
import AppHeader from "./components/AppHeader";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<AppHeader />
			<Welcome />
			<AboutMe />
		</div>
	);
}

export default App;
