import Navbar from "./components/navbar.js";
import Categories from "./components/categories.js";
import SalesImage from "./components/sales-image.js";
import Recommended from "./components/recommended.js";
import Topics from "./components/topics.js";
import Popular from "./components/popular.js";
import Footer from "./components/footer.js";

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SalesImage></SalesImage>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

export default App
