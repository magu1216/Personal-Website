import React from "react";
import styled from "styled-components";
import MeWide from "../images/MeWide.jpg";
import Typewriter from "typewriter-effect";

export default function WelcomeSection() {
	return (
		<WelcomeWrapper id='welcome'>
			<h2>
				<TypewriterWrapper>
					<Typewriter
						options={{
							strings: ["Willkommen", "Welcome", "Servus"],
							autoStart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(1500)
								.callFunction(() => {
									console.log("All strings were deleted");
								})
								.start();
						}}
					/>
				</TypewriterWrapper>
			</h2>
			<h1>
				I'm<span> Markus Gürtner</span>
			</h1>
			<h3>Junior Web Developer</h3>
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
	}

	h1 {
		color: white;
		font-size: 70px;

		span {
			color: goldenrod;
			font-weight: 500;
		}
	}

	h2 {
		color: white;
		font-size: 50px;
	}

	h3 {
		color: white;
		font-size: 30px;
	}
`;

const TypewriterWrapper = styled.div`
	display: inline-flex;
`;
