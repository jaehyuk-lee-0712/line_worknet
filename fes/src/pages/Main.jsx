import React, { useState } from "react";
import Aside from "../components/aside/Aside";
import Document from "../components/main/Document";
import Suggestion from "../components/main/Suggestion";
import Suggestion2 from "../components/main/Suggestion2";
import Suggestion3 from "../components/main/Suggestion3";
import Workcard from "../components/main/Workcard";
import PersonalRecord from "../components/main/PersonalRecord";
import Aside2 from "../components/aside/Aside2";

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
      <Workcard />
    </div>
  );
};

export default Main;
