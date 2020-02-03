import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { arrayRandomItem } from 'codewonders-helpers';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Home = () => {
	const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));
	const copyText = (e) => {
		const textField = document.createElement('textarea');
		textField.innerText = 'hellocodewonders@gmail.com';
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};

	return (
		<Layout>
			<Header color={color}>
				<PageWrapper>
					<h1 data-text="I'm Adenekan Wonderful" className="intro__text">
						<mark className="mark">I'm Adenekan Wonderful</mark>
					</h1>
					<p>
						{' '}
						Frontend developer and javascript engineer,{' '}
						<Link href="/lens">
							<a href="#!" aria-label="Go to Lens Page">
								<button type="button">Photochromic Lens</button>
							</a>
						</Link>{' '}
						enthusiast, practicing minimalist, and{' '}
						<a
							href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View Music Playlist"
						>
							<button type="button">Pop Music & Jazz lover</button>
						</a>{' '}
						in search of flow.
					</p>

					<p>
						Working with my hands to make magic happen on the internet. View my{' '}
						<Link href="/projects">
							<a href="#!" aria-label="Go to Projects Page">
								<button type="button">Projects</button>
							</a>
						</Link>
						,{' '}
						<Link href="/resume">
							<button type="button">Resumé</button>
						</Link>
						,{' '}
						<Link href="/contact">
							<a href="#!" aria-label="Go to Contact Page">
								<button type="button">Contact Me</button>
							</a>
						</Link>
						, or send me an email at{' '}
						<button
							style={{ cursor: 'crosshair' }}
							title="Copy to clipboard"
							onClick={copyText}
							type="button"
							aria-label="Send an email"
						>
							hellocodewonders@gmail.com
						</button>
						.
					</p>
					<br />
					<FooterLink goto="/about">See More About Me</FooterLink>
					<br />
				</PageWrapper>
			</Header>
		</Layout>
	);
};

const Header = styled.header`
	min-height: calc(100vh - 39vh);
	display: flex;
	align-items: center;
	justify-contents: center;
	.intro__text {
		font-size: 54px;
		font-weight: 900;
		margin: 2rem 0rem 1.5rem;
		position: relative;
		// &:hover{
		&::before,
		&::after {
			content: attr(data-text);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&::before {
			left: 2px;
			text-shadow: -1px 0 blue;
			background: var(--bg);
			animation: noise-anim-2 15s infinite linear alternate-reverse;
		}
		&::after {
			left: -2px;
			text-shadow: 3px 0 red;
			animation: noise-anim 2s infinite linear alternate-reverse;
			background: var(--bg);
		}
		@keyframes noise-anim {
			0% {
				clip-path: inset(29% 0 25% 0);
			}
			5% {
				clip-path: inset(9% 0 38% 0);
			}
			10% {
				clip-path: inset(96% 0 1% 0);
			}
			15% {
				clip-path: inset(75% 0 23% 0);
			}
			20% {
				clip-path: inset(46% 0 50% 0);
			}
			25% {
				clip-path: inset(3% 0 46% 0);
			}
			30% {
				clip-path: inset(82% 0 2% 0);
			}
			35% {
				clip-path: inset(88% 0 1% 0);
			}
			40% {
				clip-path: inset(91% 0 8% 0);
			}
			45% {
				clip-path: inset(96% 0 2% 0);
			}
			50% {
				clip-path: inset(59% 0 38% 0);
			}
			55% {
				clip-path: inset(41% 0 53% 0);
			}
			60% {
				clip-path: inset(21% 0 47% 0);
			}
			65% {
				clip-path: inset(89% 0 4% 0);
			}
			70% {
				clip-path: inset(1% 0 95% 0);
			}
			75% {
				clip-path: inset(86% 0 4% 0);
			}
			80% {
				clip-path: inset(95% 0 5% 0);
			}
			85% {
				clip-path: inset(54% 0 36% 0);
			}
			90% {
				clip-path: inset(70% 0 27% 0);
			}
			95% {
				clip-path: inset(6% 0 16% 0);
			}
			100% {
				clip-path: inset(95% 0 2% 0);
			}
		}
		@keyframes noise-anim-2 {
			0% {
				clip-path: inset(76% 0 21% 0);
			}
			5% {
				clip-path: inset(54% 0 7% 0);
			}
			10% {
				clip-path: inset(55% 0 29% 0);
			}
			15% {
				clip-path: inset(89% 0 3% 0);
			}
			20% {
				clip-path: inset(33% 0 40% 0);
			}
			25% {
				clip-path: inset(17% 0 56% 0);
			}
			30% {
				clip-path: inset(37% 0 51% 0);
			}
			35% {
				clip-path: inset(38% 0 19% 0);
			}
			40% {
				clip-path: inset(93% 0 4% 0);
			}
			45% {
				clip-path: inset(44% 0 14% 0);
			}
			50% {
				clip-path: inset(53% 0 26% 0);
			}
			55% {
				clip-path: inset(67% 0 11% 0);
			}
			60% {
				clip-path: inset(85% 0 13% 0);
			}
			65% {
				clip-path: inset(27% 0 37% 0);
			}
			70% {
				clip-path: inset(87% 0 4% 0);
			}
			75% {
				clip-path: inset(10% 0 8% 0);
			}
			80% {
				clip-path: inset(51% 0 27% 0);
			}
			85% {
				clip-path: inset(10% 0 60% 0);
			}
			90% {
				clip-path: inset(83% 0 3% 0);
			}
			95% {
				clip-path: inset(23% 0 55% 0);
			}
			100% {
				clip-path: inset(1% 0 81% 0);
			}
		}
		// }
	}
	p {
		font-size: 16px;
		line-height: 2.3;
		font-weight: 400;
		color: var(--article-color) !important;
	}
	button {
		font-size: 16px;
		background: var(--button-index);
		border: none;
		border-radius: 5px;
		transition: all 0.4s ease;
		padding: 0px 9px;
		&:hover {
			background: ${(props) => props.color};
			color: #fff;
			font-weight: 600;
		}
	}
	@media (max-width: 585px) {
		margin: 3rem 0;
		min-height: 80vh;
	}
	@media (max-width: 989px) {
		margin: 3rem 0;
	}
	@media (max-width: 220px) {
		margin: 3rem 0;
		min-height: 80vh;
	}
	@media (prefers-reduced-motion: reduce) {
		/* Stop the animation */

		.intro__text {
			animation: none;

			&::before,
			&::after {
				content: none;
			}
		}
	}
`;
export default Home;
