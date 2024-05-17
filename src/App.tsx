import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface YourComponentProps {}

interface ResponseData {
  message: string;
}

const YourComponent: React.FC<YourComponentProps> = () => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<ResponseData> = await axios.get(
          "https://api.npoint.io/14aaf2efd70f7ce1e8bd"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {data ? (
        <h2>Data from backend: {data.message}</h2>
      ) : (
        <h2>Loading...</h2>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default YourComponent;