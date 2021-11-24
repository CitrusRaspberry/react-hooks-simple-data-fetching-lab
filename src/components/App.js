import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(data => {
      setIsLoading(false);
      console.log(data);
      setImage(data.message);
    })
  }, [])

  return (
    isLoading ? <p>Loading...</p> : <img alt="A Random Dog" src={image} />
  )
}

export default App;
