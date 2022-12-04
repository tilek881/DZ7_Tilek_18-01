import './App.css';
import UserPage from "./pages/userPage/UserPage";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Menu from "./component/menu/Menu";
import MainPage from "./pages/mainPage/MainPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
    return (
        <div >
            <BrowserRouter>
                <Menu/>
            <Routes>
                <Route path= "/" element={<UserPage/>} ></Route>
                <Route path= "button" element={<ButtonPage/>} ></Route>
                <Route path="main" element={<MainPage/>}></Route>
                <Route path="about" element={<AboutUs/>}></Route>
                <Route path="portfolio" element={<PortfolioPage/>}></Route>
            </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
