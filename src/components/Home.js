import React,{ useState, useEffect } from 'react'
import './home.css'
import axios from "axios";
import logo from './assets/logo.png'
import Footer from './Footer';

export default function Home() {

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
      <div className="home">
        <h1>Welcome</h1>
        <p>Step into the vibrant world of our Fine Arts Club at <b>National Institute of Technology Hamirpur</b>, where creativity flourishes and artistic expression takes center stage. Within our gallery, discover the incredible talents of our student artists who weave visual stories with passion and flair. From vivid canvases that burst with youthful energy to sculptures that embody the innovative spirit of our community, our collection reflects the diverse and dynamic artistry that thrives within our college walls. Join us in celebrating the extraordinary talents that shape our artistic landscape. Our Fine Arts Club is a collaborative space where students, each a brushstroke in the canvas of our community, explore their creative boundaries and showcase the beauty that resides in every piece. Immerse yourself in the world of colors, shapes, and emotions as we invite you to be a part of our creative journey. Welcome to the heart of artistic expression at <b>National Institute of Technology Hamirpur</b>, where the gallery echoes with the enthusiasm of emerging artists, and every masterpiece tells a story unique to our college community.</p>
        <div className="display-image">
          <img src="" alt="" />
          {data.map((item) =>
              item.keyword === "home" ? (
                <img src={item.imageUrl} alt="" />
              ) : null
            )}
        </div>
      </div>
    </>
  )
}
