import React from "react";
import styled from "styled-components";

export default function WelcomeSection() {
	return (
		<WelcomeWrapper id='welcome'>
			<h1>Willkommen</h1>
			<h2>Welcome</h2>
			<h3>Servus</h3>
		</WelcomeWrapper>
	);
}

const WelcomeWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: black;

	h1,
	h2,
	h3 {
		padding: 30px;

		&:hover {
			transform: rotateX(180deg);
		}
	}

	h1 {
		color: white;
		font-size: 60px;
	}

	h2 {
		color: white;
		font-size: 50px;
	}

	h3 {
		color: white;
		font-size: 40px;
	}
`;
