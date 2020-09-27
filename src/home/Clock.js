import React, { useState, useEffect} from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000 );
      
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
        function tick() {
        setTime(new Date());
        }

    return(
        <h1 className="home-time">{ time.toLocaleTimeString() }</h1>
    )
}