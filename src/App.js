import React from "react";
import GlobalStyle from "./theme/globalStyles";
import AppHeader from "./components/AppHeader";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<AppHeader />
		</div>
	);
}

export default App;
