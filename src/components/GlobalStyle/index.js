import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	${({ theme }) => `
		* {
			margin: 0;
			padding: 0;
			box-sizing:border-box;
		}
		html, body {
			font-family: ${theme.font};
			background: ${theme.colors.bg};
			color: ${theme.colors.text};
			text-rendering: optimizeLegibility;
			font-smooth: antialised;
			font-smoothing: antialised;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
			height: 100%;
			min-height: 100vh;
		}

		#root {
			display: flex;
			justify-content: center;
		}
	`}
`;

export default GlobalStyle;
