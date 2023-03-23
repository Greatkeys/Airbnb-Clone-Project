import img1 from "../grid1.jpg"
import img2 from "../grid2.jpg"
import img3 from "../grid3.jpg"
import img4 from "../grid4.jpg"
import img5 from "../grid5.jpg"
import img6 from "../grid6.jpg"
import img7 from "../grid7.jpg"
import img8 from "../grid8.jpg"
import img9 from "../grid9.jpg"
export default function Hero(){
    return (
        <div className="hero">
            <div className="img-container">
                <img className="first-img" src={img1} alt="airbnblogo" />
                <img className="align-top1" src={img2} alt="airbnblogo" />
                <img className="align-bottom1" src={img3} alt="airbnblogo" />
                <img className="align-top2" src={img4} alt="airbnblogo" />
                <img className="align-bottom2" src={img5} alt="airbnblogo" />
                <img className="six-img align-top1" src={img6} alt="airbnblogo" />
                <img className="align-bottom1" src={img7} alt="airbnblogo" />
                <img className="align-top2" src={img8} alt="airbnblogo" />
                <img className="align-bottom2" src={img9} alt="airbnblogo" />
            </div>
            <div className="hero-text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one of a kind hosts all wiithout leaving home</p>
            </div>
            
        </div>
    )
}