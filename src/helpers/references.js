import React from "react";

//menu
export const homeRef = React.createRef();
export const aboutRef = React.createRef();
export const resumeRef = React.createRef();
export const portfolioRef = React.createRef();
export const contactRef = React.createRef();

export const homeMenuRef = React.createRef();
export const aboutMenuRef = React.createRef();
export const resumeMenuRef = React.createRef();
export const portfolioMenuRef = React.createRef();
export const contactMenuRef = React.createRef();

export const menuList = [
	{
		pageRef: homeRef,
		menuRef: homeMenuRef,
	},
	{
		pageRef: aboutRef,
		menuRef: aboutMenuRef,
	},
	{
		pageRef: resumeRef,
		menuRef: resumeMenuRef,
	},
	{
		pageRef: portfolioRef,
		menuRef: portfolioMenuRef,
	},
	{
		pageRef: contactRef,
		menuRef: contactMenuRef,
	},
];

//resume

export const htmlRef = React.createRef();
export const cssRef = React.createRef();
export const jsRef = React.createRef();
export const tsRef = React.createRef();
export const reactRef = React.createRef();
export const reduxRef = React.createRef();
export const sassRef = React.createRef();
export const bootstrapRef = React.createRef();
export const tailwindRef = React.createRef();

export const skills = [
	{
		name: "HTML",
		img: "/assets/img/html.png",
		ref: htmlRef,
	},
	{
		name: "CSS",
		img: "/assets/img/css.png",
		ref: cssRef,
	},
	{
		name: "JS",
		img: "/assets/img/js.png",
		ref: jsRef,
	},
	{
		name: "TS",
		img: "/assets/img/ts.png",
		ref: tsRef,
	},
	{
		name: "REACT",
		img: "/assets/img/react.png",
		ref: reactRef,
	},
	{
		name: "REDUX",
		img: "/assets/img/redux.png",
		ref: reduxRef,
	},
	{
		name: "SASS",
		img: "/assets/img/sass.png",
		ref: sassRef,
	},
	{
		name: "BOOTSTRAP",
		img: "/assets/img/bootstrap.png",
		ref: bootstrapRef,
	},
	{
		name: "TAILWIND",
		img: "/assets/img/tailwind.png",
		ref: tailwindRef,
	},
];

//portfolio

export const todoRef = React.createRef();
export const capitalRef = React.createRef();
export const shopRef = React.createRef();
export const musicRef = React.createRef();

export const projects = [
	{
		title: "Shop&Shop",
		img: "/assets/img/shop-and-shop.png",
		link: "https://shopandshop.netlify.app",
		code: "https://github.com/Sumeyye-Mete/shop-and-shop",
		ref: shopRef,
		techStack: "REACT | VITE | TS | TW",
	},
	{
		title: "Capital Guess Game",
		img: "/assets/img/capital-guess-game.png",
		link: "https://capital-guess-game.netlify.app/",
		code: "https://github.com/Sumeyye-Mete/capital-guess-game.git",
		ref: capitalRef,
		techStack: "REACT | SCSS",
	},
	{
		title: "Todo App",
		img: "/assets/img/to-do-app.png",
		link: "https://dream-app-serious.netlify.app/",
		code: "https://github.com/Sumeyye-Mete/dream-serious-app.git",
		ref: todoRef,
		techStack: "Vanilla JS | SCSS",
	},
	{
		title: "Music Player",
		img: "/assets/img/music-player.png",
		link: "https://mete-music-app.netlify.app",
		code: "https://github.com/Sumeyye-Mete/music-player-app.git",
		ref: musicRef,
		techStack: "Vanilla JS | HTML | CSS",
	},
];
