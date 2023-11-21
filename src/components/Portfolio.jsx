import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: arrayDestruct,
			href: "https://github.com/tremaineCousar/HTML_Resume_Project",
		},
		{
			id: 2,
			src: reactParallax,
			href: "https://github.com/tremaineCousar",
		},
		{
			id: 3,
			src: navbar,
			href: "https://github.com/tremaineCousar/HTML_Resume_Project",
		},
		{
			id: 4,
			src: reactSmooth,
			href: "https://github.com/tremaineCousar",
		},
		{
			id: 5,
			src: installNode,
			href: "https://github.com/tremaineCousar",
		},
		{
			id: 6,
			src: reactWeather,
			href: "https://github.com/tremaineCousar",
		},
	];
	return (
		<div
			name="portfolio"
			className=" from-black to-gray-800 text-white w-full h-full bg-gradient-to-b"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center min-h-screen">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="py-6">Check Out out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-8">
					{portfolios.map(({ id, src, href }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105"
							/>
							<div className="flex items-center justify-center">
								<a href={href}>
									<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
										Demo
									</button>
								</a>

								<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
