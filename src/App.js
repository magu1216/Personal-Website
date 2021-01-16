import React from "react";
import GlobalStyle from "./theme/globalStyles";
import AppHeader from "./components/AppHeader";
import AboutMe from "./components/AboutMe";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<AppHeader />
			<AboutMe />
		</div>
	);
}

export default App;
