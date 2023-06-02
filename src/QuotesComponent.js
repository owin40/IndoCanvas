import React, { useEffect, useState } from "react";

const QuotesComponent = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://quotes15.p.rapidapi.com/quotes/random/",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "a0e6a7a57amsh000132784fa354cp139e7fjsna6ec54730250",
              "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Quote:</h2>
      <p>{quote}</p>
    </div>
  );
};

export default QuotesComponent;
