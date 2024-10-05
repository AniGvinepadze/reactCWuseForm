import React from "react";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
  return (
    <>
      <div className="w-full h-[1000px] bg-[#0A0D17] text-white">
        <Header />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
