import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import FilterBox from "./components/FilterBox.js";
import Jobs from "./components/Jobs.js";
import Data from "./data/Jobs.json";

function App() {
  const [data, setData] = useState(Data);
  const [tags, setTags] = useState([]);

  const AddTags = (tag) => {
    if (tags.indexOf(tag) == -1) {
      setTags([...tags, tag]);
    }
  };
  const filterData = (e) => {
    console.log(tags)
    if (tags.length > 0) {
      setData(
        Data.filter(
          (job) =>
            (tags.includes(job.role) 
            //   tags.includes(job.level) &&
            //   tags.includes(job.language) &&
            // tags.includes(job.tools)
        ))
      );
    }
  };
  return (
    <div id="Div_App_JSX" className="Div_App_CSS">
      <Header />
      <FilterBox arrayTags={tags} />
      <Jobs
        jobInfo={data}
        arrayTags={tags}
        addTags={AddTags}
        addFilter={filterData}
      />
    </div>
  );
}

export default App;
