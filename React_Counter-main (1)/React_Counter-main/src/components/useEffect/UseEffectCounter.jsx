import React, { useState, useEffect } from "react";

const UseEffectCounter = ({ initialValue, incrementValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + incrementValue);
  };

  //mounting, updating, unmounting - side effect(api)
  useEffect(() => {
    console.log("Always");
  });

  //mounting
  useEffect(() => {
    console.log(`Counter ${incrementValue} is mounted`);

    return () => {
      console.log(`Counter ${incrementValue} is unmounted`);
    };
  }, []);

  //updating - side effect(api)
  useEffect(() => {
    console.log(`Counter ${incrementValue} is updated`);
  }, [count]);

  return (
    <>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment Count</button>
      </div>
    </>
  );
};

export default UseEffectCounter;