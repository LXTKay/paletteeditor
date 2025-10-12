import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Arbeitsbereich from "./components/Arbeitsbereich";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Arbeitsbereich bitDepth={2} />
      },
      {
        path: "3bit",
        element: <Arbeitsbereich bitDepth={3} />
      },
      {
        path: "4bit",
        element: <Arbeitsbereich bitDepth={4} />
      },
      {
        path: "5bit",
        element: <Arbeitsbereich bitDepth={5} />
      },
      {
        path: "6bit",
        element: <Arbeitsbereich bitDepth={6} />
      },
      {
        path: "8bit",
        element: <Arbeitsbereich bitDepth={8} />
      },
    ],
  },
]);

export default function Router() {

  return (
    <RouterProvider router={router} />
  )
}