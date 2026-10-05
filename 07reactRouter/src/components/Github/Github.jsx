import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/kanchan222")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   setData(data);
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github follwers:{data.followers}
      <img
        className="mx-auto mt-4 rounded-full"
        src={data.avatar_url}
        alt=" My Github profile"
        width="200"
        height="200"
      />
      <h2 className="mt-4">{data.name}</h2>
      <p className="mt-2">{data.bio}</p>
      <a
        href="https://github.com/kanchan222"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-orange-600 px-5 py-2 rounded-lg text-lg"
      >
        Visit My GitHub
      </a>
    </div>
  );
};

export default Github;

export const githubInfoloader = async () => {
  const response = await fetch("https://api.github.com/users/kanchan222");
  return response.json();
};
