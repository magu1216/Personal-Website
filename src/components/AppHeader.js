import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function AppHeader() {
	return (
		<Header>
			<h1>Markus Gürtner</h1>
			<Navigation />
		</Header>
	);
}

const Header = styled.header`
	display: flex;
	z-index: 0;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	color: white;
	height: 80px;
	width: 100vw;
	position: fixed;

	h1 {
		font-family: "Charmonman", cursive;
		font-size: 40px;
		margin-left: 100px;
		margin-top: 5px;
		min-width: 300px;
	}
`;
