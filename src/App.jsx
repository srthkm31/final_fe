import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@/components/theme-provider";
import Analyse from "./pages/Analyse";
import AnalysedPage from "./pages/AnalysedPage";
import GraphPage from "./pages/GraphPage";
import KnowTheJargon from "./pages/KnowTheJargon";
import {useEffect} from 'react'
function App() {
  
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/analysis" element={<AnalysedPage />} />
        <Route path="/graphpage" element={<GraphPage />} />
        <Route path="/knowthejargon" element={<KnowTheJargon />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
