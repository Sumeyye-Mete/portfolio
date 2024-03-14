import React, { useEffect, useRef } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { aboutRef } from "../helpers/references";
import "./about.scss";
import { observeViewportForAnimation } from "../helpers/functions";
import ExampleResume from "../assets/example-resume.pdf";

const About = () => {
	const headerRef = useRef();
	const contentRef = useRef();
	const listRef = useRef();

	useEffect(() => {
		observeViewportForAnimation(headerRef.current);
		observeViewportForAnimation(contentRef.current);
		observeViewportForAnimation(listRef.current);
	}, []);

	return (
		<Container className="w-100 h-100 overflow-hidden ">
			<Row
				xs={1}
				ref={aboutRef}
				className="w-100 h-100 g-4 py-5"
				style={{
					scrollMargin: "75px",
				}}
			>
				<Col lg={12} className="d-flex align-items-center">
					<h2 ref={headerRef} className="section-header ">
						<div className="text-24 text-header text-header-dark-2">
							ABOUT ME
						</div>
						<div className="text-9 upper-text title-color">
							<span className="border-bottom border-3 border-info pb-2">
								Know Me More
							</span>
						</div>
					</h2>
				</Col>
				<Col ref={contentRef} lg={6} className="text-center pe-lg-4">
					<h3 className="title-color">
						I'm <span className="text-info">Jane Doe,</span> a Frontend
						Developer
					</h3>
					<p className="text-color">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Accusantium ullam ab voluptatem. Commodi saepe amet voluptatibus
						molestias placeat officia ad rerum autem aspernatur blanditiis
						quasi, magni obcaecati illo earum reiciendis. Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Animi, delectus neque veniam
						accusantium fuga eligendi obcaecati quisquam veritatis repellendus
						doloribus, nam ipsam, odit quo sint. Cumque maiores vero tempore
						quos.
					</p>
				</Col>
				<Col ref={listRef} lg={6}>
					<ListGroup variant="flush">
						<ListGroup.Item className="title-color">
							<strong>Name:</strong>&nbsp;&nbsp;Jane Doe
						</ListGroup.Item>
						<ListGroup.Item className="title-color">
							<strong>Email:</strong>&nbsp;&nbsp;
							<a
								href="mailto:example@gmail.com"
								className=" text-decoration-none text-info  "
							>
								example@gmail.com
							</a>
						</ListGroup.Item>
						<ListGroup.Item className="border-bottom title-color">
							<strong>From:</strong>&nbsp;&nbsp;Ankara, Turkey
						</ListGroup.Item>
					</ListGroup>
					<div className="text-center mt-5">
						<a
							href={ExampleResume}
							download="Jane Doe Resume"
							target="_blank"
							rel="noreferrer"
						>
							<Button variant="info">Download Resume</Button>
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
