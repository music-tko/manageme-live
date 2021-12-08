import calendar from '../img/calendar.jpg'
import notes from '../img/notes app.png'
import todolist from '../img/todo list.png'
import budget from '../img/budget.png'
import dashboard from '../img/test account.png'

const About = () => {
    return ( 
        <main id="about" className="about">
        <div className="divider">
            <h2>Goodbye Unmanageable Paper</h2>
            <p>It's time to say goodbye to your paper planner. </p>
        </div>

         <div className="whitebg">
        <h2 className="about-heading">A Personal Planner for the Go-getters</h2>
         <div className="task">
         <img src={todolist} alt="" />
         <div className="about-text">
            <h3>Tasks</h3>
               <p>Have a lot of tasks? Prioritize your tasks and check<br/>  them off. Get that good feeling when you complete a <br/>  task.</p>
         </div>
         </div>

         <div className="notes">
         <img src={notes} alt="" />
         <div className="about-text">
            <h3>Notes</h3>
               <p>Want to jot down a quick idea? Found a good recipe? <br/> Well, write it down and review it again when you need it.</p>
         </div>
         </div>
         
         <div className="dashboard">
         <img src={dashboard} alt="" />
         <div className="about-text">
            <h3>Dashboard</h3>
               <p>Your notes, your todo lists, your calendar and your budget <br/> all in one place for your convenience. </p>
         </div>
         </div>

         <div className="calendar">
         <img src={calendar} alt="" />
         <div className="about-text">
            <h3>Scheduling</h3>
               <p>Never miss a meeting or a hang out, integrated with<br/>  Google Calendar
         Making it compatible across all browsers.</p>
         </div>
         </div>

         <div className="budget">
         <img src={budget} alt="" />
         <div className="about-text">
            <h3>Budget Planning</h3>
               <p>A simple budget planner to make money management <br/> a lot more easier. Let's make money planning more fun.</p>
         </div>
         </div>
         </div>
        

    </main>     
     );
}
 
export default About;