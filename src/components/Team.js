import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./team.css";
import axios from "axios";
import logo from './assets/logo.png'

export default function Team() {
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
      <div className="heading">Team</div>
      <div className="team">
        <div className="final-year">
          <h3>Final Year</h3>
          <div className="images">
            {data.map((item) =>
              item.keyword === "final" ? (
                <Card key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
          </div>
        </div>
        <div className="third-year">
          <h3>Third Year</h3>
          <div className="images">
            {data.map((item) =>
              item.keyword === "third" ? (
                <Card key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
          </div>
        </div>
        <div className="second-year">
          <h3>Second Year</h3>
          <div className="images">
            {data.map((item) =>
              item.keyword === "second" ? (
                <Card key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
          </div>
        </div>
        <div className="first-year">
          <h3>First Year</h3>
          <div className="images">
            {data.map((item) =>
              item.keyword === "first" ? (
                <Card key={item.id} name={item.name} imgurl={item.imageUrl} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
