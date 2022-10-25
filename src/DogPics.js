import React, { useState, useEffect } from "react";

const fetchData = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const dog = await response.json();
  return dog.message;
};

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchData().then((message) => setMessage(message));
  }, []);

  return (
    <div className="dog-pics">
      <img src={message} img alt="pic" />
      <button onClick={async (e) => setMessage(await fetchData())}>
        Doggy
      </button>
    </div>
  );
}
