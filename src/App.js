import Header from "./components/main/Header";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import GoodsBest from "./components/goods/GoodsBest";
import GoodsAll from "./components/goods/GoodsAll";
import GoodsNew from "./components/goods/GoodsNew";
import GoodsSpecial from "./components/goods/GoodsSpecial";
import Home from "./components/main/Home";
import RecipeDetail from "./components/recipe/RecipeDetail";
// import java.util.Scanner
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import FoodFind from "./components/food/FoodFind";

function App() {
    return (
        <Router>
            <Header/>
            <div className={"container"}>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"/food/list"} element={<FoodList/>}/>
                    <Route path={"/food/detail/:fno"} element={<FoodDetail/>}/>
                    <Route path={"/goods/all"} element={<GoodsAll/>}/>
                    <Route path={"/goods/best"} element={<GoodsBest/>}/>
                    <Route path={"/goods/new"} element={<GoodsNew/>}/>
                    <Route path={"/goods/special"} element={<GoodsSpecial/>}/>
                    <Route path={"/recipe/detail/:no"} element={<RecipeDetail/>}/>
                    <Route path={"/food/find"} element={<FoodFind/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;