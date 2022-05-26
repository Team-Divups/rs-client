import styled from 'styled-components';

export const Box = styled.div`
padding-top: 30px;
padding-bottom:8px;
position: fixed;
margin: 0 auto;
bottom:0%;
height:330px;
background: #ECECEC;
width: 100%;

@media only screen and (min-device-width : 480px) and (max-device-width : 1080) {
	padding: 0px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left:50px;
`;


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(230px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const SubRow = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(20px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(20px, 1fr));
}
`;


export const FooterLink = styled.a`
margin-bottom: 20px;
font-size: 12px;
text-decoration: none;
color: black;
font-style: italic;
font-family: 'Asap', sans-serif;
&:hover {
	color: #7DA7D9;
	transition: 200ms ease-in;
}
`;

export const FooterText = styled.p`
margin-bottom: 20px;
font-size: 12px;
color: black;
font-style: italic;
font-family: 'Asap', sans-serif;
`;

export const Heading = styled.p`
font-size: 16px;
margin-bottom: 40px;
font-weight: bold;
font-family: 'Asap', sans-serif;
`;

