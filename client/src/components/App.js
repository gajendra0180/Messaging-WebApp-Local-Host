import { useState } from "react";
import Login from "./Login";
function App() {
  const [id, setId] = useState(123);
  return (
    <>
      {id}
      <Login onIdSubmit={setId}/>
    </>
  );
}

export default App;
