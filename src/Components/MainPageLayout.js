import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title={"Box  Office"}
        subtitle={"Are you looking for a movie or a movie star?"}
      />
      <Navbar />
      {children}
    </div>
  );
}

export default MainPageLayout;
