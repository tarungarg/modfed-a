import React, { useEffect, useState, lazy } from "lib/react";

const RateComp = lazy(() => import("rateApp/rate")) as unknown;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [
      { pa: "C7", ca: "A2", p: "P2", r: "A", l: "1.1.1" },
      { pa: "C7", ca: "A2", p: "P2", r: "B", l: "1.1.2" },
      { pa: "C7", ca: "C71", p: "P1", r: "B", l: "1.2.1" },
      { pa: "C7", ca: "C71", p: "P3", r: "B", l: "1.2.2" },
      { pa: "C71", ca: "A3", p: "P3", r: "A", l: "1.2.3" },
      { pa: "C7", ca: "C72", p: "P4", r: "B", l: "1.3.1" },
      { pa: "C7", ca: "C72", p: "P4", r: "B", l: "1.3.2" },
      { pa: "C72", ca: "A5", p: "P5", r: "A", l: "1.3.3" },
    ];

    const groupss = {};
    for (let i = 0; i < data.length; i++) {
      let key = "";
      const a = data[i].l.split("."); // [1,1,1]
      for (let j = 0; j < a.length - 1; j++) {
        key = key + "_" + a[j];
        if (groupss[key]) {
          groupss[key].push(data[i]);
        } else {
          groupss[key] = [data[i]];
        }
      }
    }
    //  console.log(JSON.stringify(groupss))
    setData(groupss);
  }, []);

  const showDiv = (e) => {
    if (e.target.parentElement.classList.contains("open")) {
      e.target.parentElement.classList.remove("open");
    } else {
      e.target.parentElement.classList.add("open");
    }
  };

  return (
    <>
      rate appppp
      <RateComp a={"111111111111"} b={"2222222222222"} />
      <ul className="tree">
        AAAAAAAAAAAAAaa
        {Object.keys(data).map((key) => (
          <li key={Math.random()}>
            <a onClick={(e) => showDiv(e, key)}>{key}</a>
            <ul className={key}>
              {data[key].map((item) => (
                <li>
                  <a>{item.l}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
