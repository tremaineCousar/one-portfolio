import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return (
		<div
			name="home"
			className="h-full w-full bg-gradient-to-b from-black to-gray-800 via-black "
		>
			<div className="flex flex-col items-center justify-center text-white max-w-screen-lg mx-auto px-4 sm:flex-row ">
				<div className="flex flex-col justify-center min-h-screen">
					<h2 className="text-4xl md:text-7xl max-md:text-4xl font-bold pb-3 sm:pt-20">
						I am a Full Stack Developer.
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I have 2 years of experience in Full Stack Development. Currently, I
						love to work on web applications using technologies like React,
						Tailwind, Next.js, and GraphQL.
					</p>

					<div>
						<a href="https://www.linkedin.com/in/tremainecousar/">
							<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
								Portfolio
								<span className="group-hover:rotate-90 duration-300">
									<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
								</span>
							</button>
						</a>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="My Profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
