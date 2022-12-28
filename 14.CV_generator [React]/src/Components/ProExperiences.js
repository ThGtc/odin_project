import React, { Component } from "react";

class Diplomas extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3 className="interTitles">Expériences professionnelles :</h3>
                {this.props.jobs.map((job) => {
                    return <li 
                        key={job.id}> {job.companyName} : {job.positionTitle} - {job.hiringDate} 
                        <button className="delBtn" title="Supprimer l'expérience pro" onClick={this.props.onDeleteWorkElement} id={job.id}>x</button>
                        </li>
                })}
            </div>
        )
    }

}

export default Diplomas;