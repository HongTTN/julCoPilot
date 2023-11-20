// React
import React, { useState, useEffect } from "react";
import "./App.css";

// Array of messages and YouTube video links
const doorsData = [
  {
    day: 1,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 20,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 9,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 6,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 24,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 2,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 13,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 4,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 22,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 7,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 15,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 11,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 18,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 3,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 8,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 23,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 10,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 12,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 5,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 21,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 14,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 19,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 16,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
  {
    day: 17,
    message: "Merry Christmas!",
    video: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
  },
];

function App() {
  // const [doors, setDoors] = useState(doorsData);

  // Initialize doors state from localStorage or default to doorsData
  const [doors, setDoors] = useState(() => {
    const savedDoors = localStorage.getItem("doors");
    if (savedDoors) {
      return JSON.parse(savedDoors);
    } else {
      return doorsData.map(door => ({ ...door, isOpen: false }));
    }
  });

  // Update localStorage whenever doors state changes
  useEffect(() => {
    localStorage.setItem("doors", JSON.stringify(doors));
  }, [doors]);

  const flipDoor = (doorDay) => {
    const doorIndex = doors.findIndex(door => door.day === doorDay);
    if (doorIndex === -1 || doors[doorIndex].isOpen) {
      return;
    }

    const newDoors = [...doors];
    newDoors[doorIndex].isOpen = true;
    setDoors(newDoors);
  };

  return (
    <div className="App">
      <h1 className="header">Julekalender 2023</h1>
      <div className="doors">
        {doors.map((door, index) => (
          <div
            key={index}
            className={`door ${door.isOpen ? "open" : ""}`}
            onClick={() => flipDoor(door.day)}
          >
            <div className="front">
              <div className="day">{door.day}</div>
            </div>
            <div className="back">
              <div className="message">{door.message}</div>
              <a href={door.video} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
