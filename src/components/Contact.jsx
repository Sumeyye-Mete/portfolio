import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { contactRef } from "../helpers/references";
import "./contact.scss";
import { observeViewportForAnimation } from "../helpers/functions";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
	const headerRef = useRef();
	const contentRef = useRef();

	useEffect(() => {
		observeViewportForAnimation(headerRef.current);
		observeViewportForAnimation(contentRef.current);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_CODE,
				{
					name: e.target.name.value,
					email: e.target.email.value,
					message: e.target.message.value,
				},
				process.env.REACT_APP_PUBLIC_ID
			);
			Swal.fire({
				title: "Thanks for contacting me! I will be in touch with you shortly.",
				icon: "success",
			});
		} catch (error) {
			Swal.fire({
				title: "Something went wrong, please try again",
				icon: "error",
			});
		}
	};

	return (
		<Container className="w-100 h-100 overflow-hidden">
			<Row
				ref={contactRef}
				className="w-100 h-100 g-4 py-5"
				style={{
					scrollMargin: "75px",
				}}
			>
				<Col xs={12} className="d-flex align-items-center">
					<h2 ref={headerRef} className="section-header ">
						<div className="text-24 text-header text-header-dark-3">
							CONTACT
						</div>
						<div className="text-9 upper-text title-color">
							<span className="border-bottom border-3 border-info pb-2">
								Get in Touch
							</span>
						</div>
					</h2>
				</Col>
				<Col ref={contentRef} className="d-flex justify-content-center">
					<Form onSubmit={handleSubmit} style={{ width: "700px" }}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Control type="text" placeholder="Name" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="email">
							<Form.Control type="email" placeholder="Email" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="message">
							<Form.Control
								as="textarea"
								placeholder="Message"
								rows={3}
								required
							/>
						</Form.Group>
						<div className="text-center">
							<Button variant="info" type="submit">
								Contact Me
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
