import React, { useRef } from "react";
import "./profile.scss";
import "../styles/animations.scss";
import { Button } from "react-bootstrap";
import { IoArrowDown } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import { aboutRef, homeRef } from "../helpers/references";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const Profile = () => {
	const videoRef = useRef(null);

	const handleClick = () => {
		aboutRef.current.scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	return (
		<div
			ref={homeRef}
			className="profile-page-container d-flex justify-content-center w-100 h-100 overflow-hidden "
		>
			{isSafari ? (
				<img
					className="bg-image"
					src="/assets/img/bg-image.png"
					alt="background"
				/>
			) : (
				<video className="object-fit-cover" muted loop autoPlay ref={videoRef}>
					<source src="/assets/video/video.mp4" type="video/mp4" />
				</video>
			)}

			<div className="fadeInUp d-flex flex-column justify-content-end align-items-center gap-4 z-2 ">
				<div className="profile-image-container">
					{/* <a href="https://www.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_9117255.htm#fromView=search&page=1&position=2&uuid=bcba718c-4dcf-4506-8f34-75345ab7d50f">Image by cookie_studio on Freepik</a> */}
					{/* Image by cookie_studio on Freepik */}
					<img
						src="/assets/img/profile-image.jpg"
						title="I'm Jane"
						alt="I'm Jane"
					/>
				</div>
				<p className="h1 m-0 text-secondary">Welcome</p>
				<h1 className="type-writer">
					<Typewriter
						options={{
							strings: ["I'm Jane Doe.", "I'm Frontend Developer."],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<Button variant="outline-info" onClick={handleClick} className="mt-5">
					About me
				</Button>
				<div onClick={handleClick} className="arrow fs-1 my-3">
					<IoArrowDown className="bounce" />
				</div>
			</div>

			{/* background settings */}
			{<div className="background-blur"></div>}
		</div>
	);
};

export default Profile;
