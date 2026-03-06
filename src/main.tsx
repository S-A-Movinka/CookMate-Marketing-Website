import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "@/assets/Logo.png";

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDarkTheme = savedTheme ? savedTheme === "dark" : prefersDark;
document.documentElement.classList.toggle("dark", isDarkTheme);
document.documentElement.style.colorScheme = isDarkTheme ? "dark" : "light";

document.title = "CookMate_LK";

const iconLink = document.querySelector("link[rel='icon']") ?? document.createElement("link");
iconLink.setAttribute("rel", "icon");
iconLink.setAttribute("type", "image/png");
iconLink.setAttribute("href", logo);
if (!iconLink.parentNode) {
	document.head.appendChild(iconLink);
}

createRoot(document.getElementById("root")!).render(<App />);
