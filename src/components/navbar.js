function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for anything here. Tech, Bussiness, Art..."/>
        </div>
        <div class="navbar__s3">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet.</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    )
}

export default Navbar