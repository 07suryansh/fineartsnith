import React,{ useState, useEffect } from "react";
import ContributionCard from "./ContributionCard";
import './contributions.css'
import axios from "axios";
import logo from './assets/logo.png'

export default function Contributions() {

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
    <div className="heading">Contributions</div>
      <div className="contributions">
      {data.map((item) =>
              item.keyword === "contributions" ? (
                <ContributionCard key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
      </div>
    </>
  );
}
