"use client";

import { timingSafeEqual } from "crypto";
import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("00:00:00");

  const getTime = () => {
    // Create a new Date object to get the current time
    const now = new Date();

    // Specify the options for formatting the date and time
    const options = {
      timeZone: "Europe/Amsterdam", // Rotterdam's time zone
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Use 24-hour format
    };

    // Format the current time according to the specified options
    return new Intl.DateTimeFormat("en-US", options).format(now);
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className="inline-block w-[53px] min-w-[53px] max-w-[53px]">{time}</span>;
}
