import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { resumeRef, skills } from "../helpers/references";
import "./resume.scss";
import { observeViewportForAnimation } from "../helpers/functions";

const Resume = () => {
	const headerRef = useRef();
	const educationRef = useRef();
	const experienceRef = useRef();
	const skillsRef = useRef();

	useEffect(() => {
		observeViewportForAnimation(headerRef.current);
		observeViewportForAnimation(educationRef.current);
		observeViewportForAnimation(experienceRef.current);
		observeViewportForAnimation(skillsRef.current);
		skills.forEach((item) => {
			observeViewportForAnimation(item.ref.current);
		});
	}, []);

	return (
		<Container className="w-100 h-100 overflow-hidden ">
			<Row
				xs={1}
				ref={resumeRef}
				className="w-100 h-100 g-4 py-5"
				style={{
					scrollMargin: "75px",
				}}
			>
				<Col md={12} className="d-flex align-items-center">
					<h2 ref={headerRef} className="section-header ">
						<div className="text-24 text-header text-header-dark-3">
							SUMMARY{" "}
						</div>{" "}
						<div className="text-9 upper-text title-color">
							<span className="border-bottom border-3 border-info pb-2">
								Resume
							</span>
						</div>
					</h2>
				</Col>
				<Col
					ref={educationRef}
					md={6}
					className="education-section d-flex flex-column gap-4 pe-md-4"
				>
					<h3 className="fw-semibold title-color">My Education</h3>
					<div className="border shadow-sm rounded-2 p-4 d-flex flex-column">
						<p>
							<span className="bg-info text-white px-2 rounded-2 ">
								2011-2018
							</span>
						</p>
						<h4>Example Degree </h4>
						<p className="text-area">Example University</p>
					</div>
					<div className="border shadow-sm p-4 d-flex flex-column">
						<p>
							<span className="bg-info text-white px-2 rounded-2 ">
								2020-2023
							</span>
						</p>
						<h4>Example Master Degree</h4>
						<p className="text-area">Example University</p>
					</div>
				</Col>
				<Col
					ref={experienceRef}
					md={6}
					className="experience-section d-flex flex-column gap-4 pe-md-4"
				>
					<h3 className="fw-semibold title-color">My Experience</h3>
					<div className="border shadow-sm rounded-2 p-4 d-flex flex-column">
						<p>
							<span className="bg-info text-white px-2 rounded-2 ">
								2023-2024
							</span>
						</p>
						<h4>Frontend Developer</h4>
						<p className="text-area">Junior</p>
					</div>
					<div className="border shadow-sm rounded-2 p-4 d-flex flex-column">
						<p>
							<span className="bg-info text-white px-2 rounded-2 ">
								2022-2023
							</span>
						</p>
						<h4>Frontend Developer</h4>
						<p className="text-area">Internship</p>
					</div>
				</Col>
				<Col md={12} className="skills px-md-4">
					<h3 ref={skillsRef} className="fw-semibold title-color mb-4">
						My Skills
					</h3>
					<div className="d-flex gap-4 flex-wrap ">
						{skills.map((item) => (
							<div
								className="d-flex flex-column align-items-center"
								id={item.name.toLocaleLowerCase()}
								key={item.name}
								ref={item.ref}
							>
								<h5>{item.name}</h5>
								<img src={item.img} alt={item.name} className="image" />
							</div>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Resume;
