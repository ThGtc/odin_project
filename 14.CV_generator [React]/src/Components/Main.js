import React from 'react';
import uniqid from "uniqid";
import '../App.css';
import { Component, useState } from "react";
import BasicIdentity from './Forms/BasicIdentity';
import EducationalExperience from './Forms/EducationalExperience';
import WorkExperience from './Forms/WorkExperience';
import Diplomas from './Diplomas';
import ProExperiences from './ProExperiences';

class Main extends Component{

    constructor(){
        super()
        this.state = {
          identity:{
              firstName : "Nom",
              lastName : "Prénom",
              email : "mail",
              phone : "tel",
              jobArea : "Localisation",
              jobTitle : "Poste visé"
          },
          diploma:{
              schoolName : "",
              degreeName : "",
              yearGraduated : "",
              id : uniqid()
          },
          diplomas:[],
          workExp:{
            companyName : "",
            positionTitle : "",
            mainTasks : "",
            hiringDate : "",
            leavingDate : "",
            id : uniqid()
          },
          jobs:[],
        };
        this.onSubmitTask = this.onSubmitTask.bind(this);
        this.handleEducationalExp = this.handleEducationalExp.bind(this);
        this.onDeleteElement = this.onDeleteElement.bind(this);
        this.handleWorkExperience = this.handleWorkExperience.bind(this);
        this.onDeleteWorkElement = this.onDeleteWorkElement.bind(this);
        //this.onEditEducationElement= this.onEditEducationElement.bind(this)
    };

    onSubmitTask = (e) => {
      e.preventDefault();
      switch(true){

        case(e.target.id == "basicIdentity"):
        this.updatePersonalInfos(e);
        break;

        case(e.target.id == "educationalExperience"):
        this.updateEducationalExperience(e);
        break;

        case(e.target.id == "workExperience"):
        this.updateWorkExperience(e);
        break;
      };
    };

    updatePersonalInfos(e){
      this.setState({
        identity:{
          firstName : e.target.firstName.value,
          lastName : e.target.name.value,
          email : e.target.email.value,
          phone : e.target.phone.value,
          jobArea :e.target.jobArea.value,
          jobTitle : e.target.nomPoste.value
        },
      });
    };

    handleEducationalExp = e => {
      //console.log(e.target.parentNode.childNodes)
      this.setState({
        diploma:{
          schoolName : e.target.parentNode.childNodes[2].value,
          degreeName : e.target.parentNode.childNodes[4].value,
          yearGraduated : e.target.parentNode.childNodes[6].value,
          id: this.state.diploma.id
        },
      });
    }

    updateEducationalExperience = e => {
      this.setState({
        diplomas:this.state.diplomas.concat(this.state.diploma),
        diploma:{
          schoolName : '',
          degreeName : '',
          yearGraduated : '',
          id: uniqid()
        },
    });
    console.log(this.state.diplomas);
    };

    onDeleteElement = e => {
      //suppr un élément du array :
      let first = this.state.diplomas.findIndex(x => x.id == e.target.id);
      this.setState({
        diplomas:this.state.diplomas.filter(x => x.id !== e.target.id)
      })
    }

/* Fonction pour édit un diplôme : pas trouvé !
    onEditEducationElement = e => {
      let first = this.state.diplomas.findIndex(x => x.id == e.target.id);
      console.log(this.state.diplomas[first].schoolName)
      document.getElementById(e.target.id).contentEditable = true;
      
      e.target.innerText = "Confirmer les modifs";
      // e.target.addEventListener("click", function(){
      //   this.setState({
      //     diplomas:this.state.diplomas[first+1] = this.state.diploma
      //   })
      //   console.log(this.diplomas)
      // })
    }
*/

    handleWorkExperience = e => {
      console.log(e.target.parentNode.childNodes[2].value)
      this.setState({
        workExp:{
          companyName :  e.target.parentNode.childNodes[2].value,
          positionTitle :  e.target.parentNode.childNodes[4].value,
          mainTasks :  e.target.parentNode.childNodes[6].value,
          hiringDate :  e.target.parentNode.childNodes[8].value,
          leavingDate :  e.target.parentNode.childNodes[10].value,
          id: this.state.workExp.id
        },
      });
    }

    updateWorkExperience = e => {
      this.setState({
        jobs:this.state.jobs.concat(this.state.workExp),
        workExp:{
          companyName :  '',
          positionTitle :  '',
          mainTasks :  '',
          hiringDate :  '',
          leavingDate : '',
          id: uniqid()
        },
    });
    console.log(this.state.diplomas);
    };

    onDeleteWorkElement = e => {
      let first = this.state.jobs.findIndex(x => x.id == e.target.id);
      this.setState({
        jobs:this.state.jobs.filter(x => x.id !== e.target.id)
      })
    }

   
    render(){
        return (
            <div className="Main">
              <main className="cvMainPart">
      
                <section id='leftPart'>
                  <h2>Pour remplir votre CV...</h2>

                  <BasicIdentity onSubmitTask={this.onSubmitTask}/>
      
                  <EducationalExperience onSubmitTask={this.onSubmitTask} handleEducationalExp={this.handleEducationalExp}/>
      
                  <WorkExperience onSubmitTask={this.onSubmitTask} handleWorkExperience={this.handleWorkExperience}/>
                  
                </section>
      
      
                <section id='rightPart'>
                  <h2>... Et le visualiser</h2>
                    <div className="resumeArea">
                      
                      <div className='leftCol'>
                        <div className='contactBox'>
                            <h3>Contact :</h3>
                            <p>{this.state.identity.email}</p>
                            <p>{this.state.identity.phone}</p>
                            <p>{this.state.identity.jobArea}</p>
                        </div>
                        <div className='skillsBox'>
                            <h3>Compétences :</h3>
                        </div>
                      </div>
                      <div className='rightCol'>
                        <div className='nameJob'>
                          <h3 id="nomCV">{this.state.identity.firstName} {this.state.identity.lastName}</h3>
                          <h4 id="nomPoste">{this.state.identity.jobTitle}</h4>
                        </div>
                        <div className='educInfos'>
                          <Diplomas diplomas={this.state.diplomas} onDeleteElement={this.onDeleteElement} onEditEducationElement={this.onEditEducationElement}/>
                        </div>
                        
                        <div className='proInfos'>
                          <ProExperiences jobs={this.state.jobs} onDeleteWorkElement={this.onDeleteWorkElement} />
                        </div>
                      </div>
                    </div>
                </section>    
              </main>
            </div>
          );
    }
}
export default Main;