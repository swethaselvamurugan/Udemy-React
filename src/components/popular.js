import one from "../assets/images/recommended image 1.jpg"
import two from "../assets/images/recommended image 2.jpg"
import three from "../assets/images/recommended image 3.jpg"
import four from "../assets/images/recommended image 4.jpg"

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p>Pick the best fit</p>
        <div class="popular-container">
            <div class="course-card">
                <img src={one}/>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={two}/>
                <h3>Basic to Advanced Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={three}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={four}/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={one}/>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={two}/>
                <h3>Basic to Advanced Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={three}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={four}/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular