import React, { useState } from "react";
import Aside from "../components/aside/Aside";
import Document from "../components/main/Document";

const Main = () => {
  // const [currentView, setCurrentView] = useState("Document");

  // const renderView = () => {
  //   switch (currentView) {
  //     case "document":
  //       return <Document />;
  //   }
  // };

  return (
    <div id="main_wrap">
      <Aside />
      <Document />
    </div>
  );
};

export default Main;
