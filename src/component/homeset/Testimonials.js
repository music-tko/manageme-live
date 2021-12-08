import bella from '../img/Bella.jpg'
import roy from "../img/Roy.jpg"
import tracey from '../img/Tracey.jpg'

const Testimonals = () => {
    return ( 
        <div id="testimonials" className="testi">
            <h2>Testimonals</h2>

          <div className="testi-profiles">
            <div className="testi-profile1">
                <img src={bella} alt="" />
                <p>This is my first day with the website, it was easy to learn, it had everything I wanted in a planner, design is simple and easy to use.</p>
                 <p className="authorName">Bella Mina</p>
            </div>
            <div className="testi-profile2">
            <img src={roy} alt="" />
                <p>My daily planner has assisted me in meeting my daily target.</p>
                <p className="authorName">Roy Roberts</p>
            </div>
            <div className="testi-profile3">
            <img src={tracey} alt="" />
                <p>THIS WEBSITE HELPS ME KEEP TRACK OF MY WORK, SCHOOL AND OFF DAYS. THAT IS GREAT.</p>
                <p className="authorName">Tracey Johnson</p>
            </div>
            </div>
            
        </div>
     );
}
 
export default Testimonals;