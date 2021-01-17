import React from "react";
import styled from "styled-components";

export default function ProjectsSection() {
	return (
		<ProjectsWrapper id='projects'>
			<h1>Projects</h1>
		</ProjectsWrapper>
	);
}

const ProjectsWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: crimson;
`;
