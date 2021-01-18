import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Navigation from "./Navigation";

export default function AppHeader() {
	return (
		<Header>
			<h1>
				<Link to='welcome' spy={true} smooth={true}>
					Markus Gürtner
				</Link>
			</h1>
			<Navigation />
		</Header>
	);
}

const Header = styled.header`
	display: flex;
	z-index: 0;
	align-items: center;
	justify-content: space-between;
	background-color: none;
	color: white;
	height: 6vh;
	width: 100vw;
	position: fixed;

	h1 {
		font-family: "Charmonman", cursive;
		font-size: 40px;
		margin-left: 100px;
		margin-top: 5px;
		min-width: 300px;

		&:hover {
			cursor: pointer;
		}
	}
`;
