import React from "react";
import styled from "styled-components";

export default function AboutMeSection() {
	return (
		<AboutMeWrapper id='aboutme'>
			<TextBox>
				<h2>Location</h2>
				<p>Munich</p>
			</TextBox>
			<img
				src='https://profile-images.xing.com/images/c84a69278abeff4d24088560acefdbb3-4/markus-g%C3%BCrtner.1024x1024.jpg'
				alt='picture_of_myself'
			></img>
			<TextBox>
				<h1>Motivation</h1>
				<p>
					Aus dem Maschinenbau kommend freue ich mich nun
					auf meinen neuen Weg in der IT. Mit einem modernen
					Mindset und aktuellsten Tools die Welt von morgen
					mitzugestalten ist mein persönlicher Antrieb. Ich
					bin gespannt, welche Herausforderungen von mir
					gemeistert werden wollen.
				</p>
			</TextBox>
		</AboutMeWrapper>
	);
}

const AboutMeWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: rgb(98, 98, 98);
	background: radial-gradient(
		circle,
		rgba(98, 98, 98, 1) 0%,
		rgba(143, 255, 225, 1) 100%
	);

	img {
		width: 400px;
		border-radius: 200px;
	}
`;

const TextBox = styled.div`
	width: 20vw;
	margin: 20px;
`;
