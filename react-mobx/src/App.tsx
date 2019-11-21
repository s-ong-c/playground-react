import React from "react";
import SuperMarket from "./components/SuperMarket";
import DevTools from "mobx-react-devtools";
const App: React.FC = () => {
  return (
    <div>
      <SuperMarket />
      <DevTools />
    </div>
  );
};

export default App;
