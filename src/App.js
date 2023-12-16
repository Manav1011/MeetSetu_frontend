import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routes/routes";
import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
function App() {
  const [progress, setProgress] = useState(false);
  if (typeof window !== "undefined") {
    window.setProgress = setProgress;
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <MainRouter />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
