import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Navigation() {
	return (
		<Navi>
			<NavItem>
				<Link to='welcome' spy={true} smooth={true}>
					Home
				</Link>
			</NavItem>
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
			<NavItem>
				<Link to='contact' spy={true} smooth={true}>
					Contact
				</Link>
			</NavItem>
		</Navi>
	);
}

const Navi = styled.nav`
	display: flex;
	justify-content: right;
	color: white;
	display: flex;
	align-items: center;
	height: 60px;
`;

const NavItem = styled.div`
	display: flex;
	width: 140px;
	padding: 25px;
	height: 80px;
	justify-content: center;
	align-items: center;

	&:hover {
		font-size: 18px;
		border-bottom: goldenrod 3px solid;
		cursor: pointer;
	}
`;
