import { useEffect } from "react";
import About from "./components/About";
import Menubar from "./components/Menubar";
import Profile from "./components/Profile";
import { observeViewportForMenu } from "./helpers/functions";
import { useSelector } from "react-redux";
import { menuList } from "./helpers/references";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Col, Row } from "react-bootstrap";

function App() {
	const { mode } = useSelector((state) => state.misc);

	useEffect(() => {
		menuList.forEach((item) => {
			observeViewportForMenu(item.pageRef.current, item.menuRef.current);
		});
	}, []);

	return (
		<div id={mode}>
			<Row xs={1}>
				<Col className="vh-100 vw-100 p-0 ">
					<Profile />
				</Col>
				<Menubar />
				<Col className="about-section min-vh-100 vw-100 p-0 ">
					<About />
				</Col>
				<Col className="resume-section min-vh-100 vw-100 p-0 ">
					<Resume />
				</Col>
				<Col className="portfolio-section min-vh-100 vw-100 p-0 ">
					<Portfolio />
				</Col>
				<Col className="contact-section min-vh-100 vw-100 p-0 ">
					<Contact />
				</Col>
			</Row>
		</div>
	);
}

export default App;
