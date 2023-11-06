import React from "react";
import { Header } from "./component/Header/Header.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import { Main } from "./component/Main/Main.jsx";
import { TaskProvider } from "./hooks/tasks/task-provider.js";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Header />
        <Main />
        <Footer />
      </TaskProvider>
    </div>
  );
}

export default App;
