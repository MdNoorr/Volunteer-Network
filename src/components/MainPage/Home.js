import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { volunteerTasks } from "../../fakeData/fakeData";
import Card from "./Card";

const Home = () => {
	const tasks = volunteerTasks;

	const { user, data } = useContext(UserContext);
	const [baseData, setBaseData] = data;

	// If DB is empty then add fake data
	const handleAddBaseData = () => {
        console.log(tasks);
        
		fetch("https://ancient-sands-75370.herokuapp.com/addBaseData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tasks),
		});
	};

	useEffect(() => {
		fetch("https://ancient-sands-75370.herokuapp.com/home")
			.then((res) => res.json())
			.then((data) => {
				setBaseData(data);
				console.log("Home->", data);
			});
	}, []);

	return (
		<main className="vn-home pt-5 mt-2">
			<div className="container text-center">
				<div className="vn-works-search">
					<h2 className="display-5 mb-4">I grow by helping people in need.</h2>
					<div className="form-group">
						<input type="search" placeholder="Search ... " className="form-control" />
						<button className="btn btn-primary" type="button" id="button-addon2">
							Search
						</button>
					</div>
				</div>

				{/* <button onClick={handleAddBaseData}>ADD</button> */}

				<div className="vn-works py-5 mt-2">
					{baseData.length ? (
						<div className="row">
							{baseData.map((task) => (
								<Card task={task} key={Math.random()}></Card>
							))}
						</div>
					) : (
						<div style={{ maxWidth: "400px", margin: "auto" }}>
							
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Home;
