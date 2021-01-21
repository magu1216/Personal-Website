import React from "react";
import styled from "styled-components";

export default function AboutMeSection() {
	return (
		<AboutMeWrapper id='aboutme'>
			<TextBox>
				<h1>Business</h1>
				<p>Junior Web Developer</p>
				<h1>Location</h1>
				<p>Munich</p>
				<h1>Location</h1>
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
	background: #313131;

	img {
		width: 400px;
		border-radius: 200px;
		border: 3px solid goldenrod;
	}
`;

const TextBox = styled.div`
	margin: 20px;
	width: 400px;

	h1 {
		&::first-letter {
			color: goldenrod;
		}
	}

	p {
		font-size: 20px;
		color: silver;
	}
`;
