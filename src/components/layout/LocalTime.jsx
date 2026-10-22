import { useEffect, useState } from "react";

const getTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

const LocalTime = ({ className = "" }) => {
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTime()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={className}>
      {time} IST
    </span>
  );
};

export default LocalTime;
