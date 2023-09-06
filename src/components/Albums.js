import axios from "axios";
import React, { useEffect, useState } from "react";

import '../albums.css';

function Albums() {
  const [albums, setAlbums] = useState([]);
  // fetch albums from api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  return (
    <div>
      <h1>Album List</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
             {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
