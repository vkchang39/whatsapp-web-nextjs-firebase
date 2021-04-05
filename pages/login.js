import { Button } from "@material-ui/core";
import styled from "styled-components";
import Head from "next/head";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { auth, provider } from "../firebase";

function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};
	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>
			<LoginContainer>
				<Logo />
				<LoginButton onClick={signIn} variant="outlined">
					Sign in with Google.
				</LoginButton>
			</LoginContainer>
		</Container>
	);
}

export default Login;

const Logo = styled(WhatsAppIcon)`
	&&& {
		height: 200px;
		width: 200px;
	}
	margin-bottom: 50px;
	filter: drop-shadow(-3px -3px 2px rgba(225, 225, 225, 0.3))
		drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
		drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));
`;

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: whitesmoke;
`;
const LoginContainer = styled.div`
	padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
		0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
		0 22.3px 17.9px rgba(0, 0, 0, 0.042),
		0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
`;

const LoginButton = styled(Button)`
	&&& {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		color: #fff;
		border: 4px solid #000;
		box-shadow: 0px 0px 0px 1px #000 inset;
		background-color: #000;
		overflow: hidden;
		position: relative;
		transition: all 0.3s ease-in-out;

		:hover {
			text-decoration: none;
		}

		/*btn_background*/

		:hover {
			border: 4px solid #666;
			background-color: #fff;
			box-shadow: 0px 0px 0px 4px #eee inset;
		}

		/*btn_text*/
		span {
			transition: all 0.2s ease-out;
			z-index: 2;
		}
		:hover span {
			letter-spacing: 0.13em;
			color: #333;
		}

		/*highlight*/
		:after {
			background: #fff;
			border: 0px solid #000;
			content: "";
			height: 155px;
			left: -75px;
			opacity: 0.8;
			position: absolute;
			top: -50px;
			-webkit-transform: rotate(35deg);
			transform: rotate(35deg);
			width: 50px;
			transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
			z-index: 1;
		}
		:hover:after {
			background: #fff;
			border: 20px solid #000;
			opacity: 0;
			left: 120%;
			-webkit-transform: rotate(40deg);
			transform: rotate(40deg);
		}
	}
`;
