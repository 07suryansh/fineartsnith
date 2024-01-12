import React,{ useState, useEffect } from 'react'
import './gallery.css'
import GalleryCard from './GalleryCard'
import axios from "axios";
import logo from './assets/logo.png'

export default function Gallery() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://fineartsnith-backend.vercel.app/";

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={logo} alt="Loading logo" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  return (
    <>
    <div className="heading">Gallery</div>
      <div className="gallery">
      {data.map((item) =>
              item.keyword === "gallery" ? (
                <GalleryCard key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
      </div>
    </>
  )
}
