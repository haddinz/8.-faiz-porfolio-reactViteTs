import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./../styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./homepage.tsx";
import { HelmetProvider } from "react-helmet-async";
import NotFoundPage from "../components/404.tsx"
import Message from "./pages/emailMessage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homepage />} />
      <Route path="/message" element={<Message />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
