import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
// import { Button } from "@base-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return <Button>Click me</Button>;
}

export default App;
