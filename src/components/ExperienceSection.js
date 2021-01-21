import React from "react";
import styled from "styled-components";

export default function ExperienceSection() {
	return (
		<ExperienceWrapper id='experience'>
			<h1>Experience</h1>
		</ExperienceWrapper>
	);
}

const ExperienceWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: dimgray;
`;
