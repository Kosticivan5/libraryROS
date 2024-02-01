import { createHashRouter, RouterProvider } from "react-router-dom";
import Rules from "./pages/Rules";
import Registration from "./pages/Registration";
import Popular from "./pages/Popular";
import QandA from "./pages/Q&A";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Rules /> },
      { path: "registration", element: <Registration /> },
      { path: "q&a", element: <QandA /> },
      { path: "popular", element: <Popular /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
