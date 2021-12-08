import React, { Component } from 'react';
import add from '../img/add-n.png';
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class Notes extends Component {
   render(){
    console.log(this.props);
    return (   
        <div>
         <h1 className="notes">Notes</h1>
        
         <button id="addnotes"><Link to="/notes-create"><img id="addbtn" src={add} /></Link></button>

           <div className="notes-details">
            <div className="notes-card">
                <h2 className="notes-title">ll</h2>
                <p className="notes-content">Time</p>
            </div>
            </div>
        </div>
     );
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.note.notes
    }
}
 
export default connect(mapStateToProps)(Notes);