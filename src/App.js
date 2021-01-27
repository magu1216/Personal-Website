import React from "react";
import GlobalStyle from "./theme/globalStyles";
import AppHeader from "./components/AppHeader";
import WelcomeSection from "./components/WelcomeSection";
import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<AppHeader />
			<WelcomeSection />
			<AboutMeSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}

export default App;
