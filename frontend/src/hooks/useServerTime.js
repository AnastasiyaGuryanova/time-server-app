import { useState, useEffect } from "react";
import axios from "axios";
import { formatTime } from "../utils/formatTime";

export const useServerTime = (url = "http://localhost:3001") => {
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/`);
        const serverTime = new Date(response.data.time);
        setTime(formatTime(serverTime));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, isLoading };
};
