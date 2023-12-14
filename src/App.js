import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routes/routes";
import { useState } from "react";
import "./App.css"
function App() {
  const [progress, setProgress] = useState(false);
  if (typeof window !== "undefined") {
    window.setProgress = setProgress;
  }

  return (
    <Router>
      
      <div className="App">
      {/* <LoadingBar
        color={"#1f6feb"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
        <MainRouter />
      </div>
    </Router>
  );
}

export default App;
