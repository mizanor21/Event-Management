import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
