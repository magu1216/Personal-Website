import React from "react";
import styled from "styled-components";
import MeWide from "../images/MeWide.jpg";

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
	justify-content: center;
	height: 100vh;
	background: no-repeat url(${MeWide});
	background-size: cover;
	background-position: center;

	h1,
	h2,
	h3 {
		font-weight: lighter;
		padding: 30px;
		transition: all 0.3s ease;

		&:hover {
			color: goldenrod;
			padding-left: 3vw;
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
