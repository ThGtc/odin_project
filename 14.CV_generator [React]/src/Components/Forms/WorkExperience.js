import React, { Component } from "react";

class WorkExperience extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
              <form id='workExperience' onSubmit={this.props.onSubmitTask}>
                    <fieldset className="basicForm">
                      <legend>Expérience profesionnelle</legend>
                      <label htmlFor='companyName'>Nom de l'employeur</label>
                      <input onChange={this.props.handleWorkExperience} type='text' id='companyName' required/>
      
                      <label htmlFor='positionTitle'>Intitulé du poste</label>
                      <input onChange={this.props.handleWorkExperience} type='text' id='positionTitle' required/>
      
                      <label htmlFor='mainTasks'>Principales missions effectuées</label>
                      <input onChange={this.props.handleWorkExperience} type='textArea' id='mainTasks' required/>
      
                      <label htmlFor='hiringDate'>Date d'embauche</label>
                      <input onChange={this.props.handleWorkExperience} type='date' id='hiringDate' required/>
      
                      <label htmlFor='leavingDate'>Date de départ</label>
                      <input onChange={this.props.handleWorkExperience} type='date' id='leavingDate' required/>
      
                      <button className='submitBtn' type='submit'>Ajouter une expérience profesionnelle</button>          
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default WorkExperience;