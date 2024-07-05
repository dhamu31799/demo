import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function Calender() {
  const [value, setvalue] = useState(new Date());
  return (
    <div>
      <Calendar value={value} />
    </div>
  );
}

export default Calender;
