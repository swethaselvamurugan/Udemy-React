import image from "../assets/images/udemy sales image.jpg"

function SalesImage(){
    return(
        <div class="sales-image">
        <img src={image} alt="Sales Image"/>
        <div class="sales-image__offer">
            <h1>Udemy Flash Sale! 24 hours to save.</h1>
            <p>Get the top courses for just 499. Just one day to save but a lifetime to learn.</p>
        </div>
    </div>

    )
}

export default SalesImage