import axios from "axios";
import React, { useEffect, useState } from "react";

function Albums() {
  const [albums, setAlbums] = useState([]);
  // fetch albums from api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
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
            {album.userId} - {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
