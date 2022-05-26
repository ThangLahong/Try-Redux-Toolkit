import Counter from "./components/Counter";
import { useEffect } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  useEffect(() => {
    document.title = 'Counter';
    console.log('re-render');
  }, [])

  console.log('app re-render');
  return (
    <>
      <Header/>
      <Auth/>
      <Counter/>
    </>
  );
}

export default App;
