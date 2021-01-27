import React from "react";
import styled from "styled-components";

export default function ContactSection() {
	return (
		<ContactWrapper id='contact'>
			<h1>Just say hi.</h1>
		</ContactWrapper>
	);
}

const ContactWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: darkgoldenrod;
`;
