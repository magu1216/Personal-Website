import React from "react";
import styled from "styled-components";

export default function Navigation() {
	return (
		<Navi>
			<NavItem>About Me</NavItem>
			<NavItem>Experiences</NavItem>
			<NavItem>Abilities</NavItem>
			<Contact
				as='a'
				href='mailto:guertnermarkus@gmail.com'
			>
				Contact Me
			</Contact>
		</Navi>
	);
}

const Navi = styled.nav`
	display: flex;
	margin-right: 30px;
	justify-content: right;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	height: 60px;
	width: 50vw;
`;

const NavItem = styled.div`
	display: flex;
	min-width: 150px;
	width: auto;
	height: 80px;
	justify-content: center;
	align-items: center;

	&:hover {
		color: gray;
		font-size: 20px;
		cursor: pointer;
	}
`;

const Contact = styled.button`
	display: flex;
	justify-content: center;
	border-style: none;
	border-radius: 20px;
	margin: 10px;
	padding: 10px;
	min-width: 120px;
	background-color: gray;
	text-decoration: none;
	color: inherit;

	&:hover {
		background-color: darkgoldenrod;
		cursor: pointer;
	}
`;
