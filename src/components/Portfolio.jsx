import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { portfolioRef, projects } from "../helpers/references";
import "./portfolio.scss";
import { observeViewportForAnimation } from "../helpers/functions";
import { FaGithub } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";

const Portfolio = () => {
	const headerRef = useRef();
	const contentRef = useRef();

	useEffect(() => {
		observeViewportForAnimation(headerRef.current);
		observeViewportForAnimation(contentRef.current);
		projects.forEach((item) => {
			observeViewportForAnimation(item.ref.current);
		});
	}, []);

	return (
		<Container className="w-100 h-100  overflow-hidden ">
			<Row
				ref={portfolioRef}
				className="w-100 h-100 g-4 py-5"
				style={{
					scrollMargin: "75px",
				}}
			>
				<Col xs={12} className="d-flex align-items-center">
					<h2 ref={headerRef} className="section-header ">
						<div className="text-24 text-header text-header-dark-2">
							PORTFOLIO
						</div>
						<div className="text-9 upper-text title-color">
							<span className="border-bottom border-3 border-info pb-2">
								Projects
							</span>
						</div>
					</h2>
				</Col>
				<Col>
					<Row ref={contentRef} className="w-100 h-100 g-4 pb-4">
						{projects.map((item, index) => (
							<Col
								xs={12}
								md={6}
								xl={4}
								key={index}
								ref={item.ref}
								className="project rounded-lg pe-3"
								style={{
									height: "300px",
								}}
							>
								<div className="inner-div overflow-hidden w-100 h-100">
									<img
										src={item.img}
										alt={item.title}
										className="w-100 h-100 object-fit-cover"
									/>
									<div className="blur text-white d-flex flex-column justify-content-center align-items-center ">
										<h5>{item.title}</h5>
										<p>{item.techStack}</p>
										<div className="links d-flex gap-4">
											{!!item.code && (
												<a href={item.code} target="_blank" rel="noreferrer">
													<FaGithub className="fs-3" />
													Code
												</a>
											)}
											<a href={item.link} target="_blank" rel="noreferrer">
												<PiBroadcastFill className="fs-3" />
												Live Site
											</a>
										</div>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Portfolio;
