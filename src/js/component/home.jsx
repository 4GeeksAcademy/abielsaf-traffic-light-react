import React, { useState } from "react";


const Home = () => {
	const [ selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="container">
			<div className="traffic-light-container"> 
				<div className="traffic-light-cable"></div>
				<div className="traffic-light ">
					<div
						onClick={() => setSelectedColor("red")}  
						className={"light red" + ((selectedColor === "red") ? " glow" : (""))}>
					</div>
					<div
						onClick={() => setSelectedColor("yellow")}   
						className={"light yellow" + ((selectedColor === "yellow") ? " glow" : (""))}>
					</div>
					<div
						onClick={() => setSelectedColor("green")}   
						className={"light green" + ((selectedColor === "green") ? " glow" : (""))}>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;
