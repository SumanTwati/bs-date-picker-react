import React from "react";
import ReactDOM from "react-dom/client";
import { BSDatePicker } from "./BSDatePicker";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BSDatePicker language="np" format="MMM DD, YYYY" />
      </main>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BSDatePicker
          defaultValue="2025-01-01"
          language="en"
          format="DDth MMMM, YYYY"
        />
      </main>
    </div>
  </React.StrictMode>
);
