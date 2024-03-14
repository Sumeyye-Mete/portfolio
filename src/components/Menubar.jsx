import React, { useState } from "react";
import { Container, ListGroup, Navbar } from "react-bootstrap";
import "./menubar.scss";
import {
	aboutMenuRef,
	aboutRef,
	contactMenuRef,
	contactRef,
	homeMenuRef,
	homeRef,
	portfolioMenuRef,
	portfolioRef,
	resumeMenuRef,
	resumeRef,
} from "../helpers/references";
import { toggleTheme } from "../store/slices/misc-slice";
import { useDispatch, useSelector } from "react-redux";
import {
	FaGithub,
	FaLightbulb,
	FaLinkedin,
	FaRegLightbulb,
} from "react-icons/fa6";
import { DARK } from "../helpers/keywords";

const Menubar = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.misc);

	const handleMenu = () => {
		if (show) {
			setShow(false);
		} else {
			setShow(true);
		}
	};
	const handleLink = (ref) => {
		setShow(false);
		ref.current.scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	return (
		<Navbar bg="dark" expand="lg" className="menubar shadow-sm  sticky-top">
			<Container className="position-relative flex-nowrap  p-2">
				<Navbar.Brand href="#home">
					<img
						src="/assets/img/logo.svg"
						alt="logo"
						width={50}
						height={50}
						onClick={() => handleLink(homeRef)}
					/>
				</Navbar.Brand>
				<Navbar.Collapse className={show && "show"}>
					<ListGroup className="position-absolute end-0 start-0">
						<ListGroup.Item
							ref={homeMenuRef}
							action
							onClick={() => handleLink(homeRef)}
						>
							HOME
						</ListGroup.Item>
						<ListGroup.Item
							ref={aboutMenuRef}
							action
							onClick={() => handleLink(aboutRef)}
						>
							ABOUT
						</ListGroup.Item>
						<ListGroup.Item
							ref={resumeMenuRef}
							action
							onClick={() => handleLink(resumeRef)}
						>
							RESUME
						</ListGroup.Item>
						<ListGroup.Item
							ref={portfolioMenuRef}
							action
							onClick={() => handleLink(portfolioRef)}
						>
							PORTFOLIO
						</ListGroup.Item>
						<ListGroup.Item
							ref={contactMenuRef}
							action
							onClick={() => handleLink(contactRef)}
						>
							CONTACT
						</ListGroup.Item>
					</ListGroup>
				</Navbar.Collapse>
				<div className="d-flex align-items-center gap-2">
					<button
						className={`menu-toggler d-lg-none ${show && "cross"}`}
						onClick={handleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					{mode === DARK ? (
						<FaRegLightbulb
							className="text-white fs-2 icon"
							onClick={() => dispatch(toggleTheme())}
						/>
					) : (
						<FaLightbulb
							className="text-white fs-3 icon"
							onClick={() => dispatch(toggleTheme())}
						/>
					)}
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						className="text-decoration-none"
					>
						<FaGithub className="text-white fs-4 icon ms-2" />
					</a>
					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noreferrer"
						className="text-decoration-none"
					>
						<FaLinkedin className="text-white fs-4 icon" />
					</a>
				</div>
			</Container>
		</Navbar>
	);
};

export default Menubar;
