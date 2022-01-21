import React, { useState } from "react";
import ActorGrid from "../Components/Actors/ActorGrid";
import MainPageLayout from "../Components/MainPageLayout";
import ShowGrid from "../Components/Shows/ShowGrid";
import { getApi } from "../misc/Config";

function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isShowsSearch = searchOption === "shows";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = async () => {
    const data = await getApi(`search/${searchOption}?q=${value}`);
    setData(data);
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    handleSearch();
  };

  const renderData = () => {
    if (data && data.length > 0) {
      if (data[0].show) return <ShowGrid data={data} />;
      return <ActorGrid data={data} />;
    }
    if (data && data.length === 0) return <div>Nothing Found</div>;
    return null;
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        name="search"
        placeholder="search for something"
        value={value}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>This is Home Page</h3>
      <div>
        <label htmlFor="shows-search">Shows</label>
        <input
          type="radio"
          id="shows-search"
          value="shows"
          onChange={onRadioChange}
          checked={isShowsSearch}
        />
        <label htmlFor="actor-search">Actors</label>
        <input
          type="radio"
          id="actor-search"
          value="people"
          onChange={onRadioChange}
          checked={!isShowsSearch}
        />
      </div>
      {renderData()}
    </MainPageLayout>
  );
}

export default Home;
