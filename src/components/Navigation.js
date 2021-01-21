import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Navigation() {
	return (
		<Navi>
			<NavItem>
				<Link to='aboutme' spy={true} smooth={true}>
					About Me
				</Link>
			</NavItem>
			<NavItem>
				<Link to='experience' spy={true} smooth={true}>
					Experience
				</Link>
			</NavItem>
			<NavItem>
				<Link to='projects' spy={true} smooth={true}>
					Projects
				</Link>
			</NavItem>
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
		font-size: 20px;
		border-bottom: goldenrod 2px solid;
		cursor: pointer;
	}
`;

const Contact = styled.button`
	display: flex;
	justify-content: center;
	border-style: none;
	border-radius: 20px;
	margin: 0 20px;
	padding: 10px;
	min-width: 120px;
	background-color: gray;
	text-decoration: none;
	color: inherit;

	&:hover {
		background-color: goldenrod;
		color: black;
		cursor: pointer;
	}
`;
