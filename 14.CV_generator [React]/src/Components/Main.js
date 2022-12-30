import React from 'react';
import uniqid from "uniqid";
import '../App.css';
import { useState } from "react";
import BasicIdentity from './Forms/BasicIdentity';
import EducationalExperience from './Forms/EducationalExperience';
import WorkExperience from './Forms/WorkExperience';
import Diplomas from './Diplomas';
import ProExperiences from './ProExperiences';

const Main = () => {

  /*En prévision du refacto using state hooks, voilà un ex : */

    const[identity, setIdentity] = useState({
      firstName : "Nom",
      lastName : "Prénom",
      email : "mail",
      phone : "tel",
      jobArea : "Localisation",
      jobTitle : "Poste visé"
    });

    const[diploma, setDiploma] = useState({
      schoolName : "",
      degreeName : "",
      yearGraduated : "",
      id : uniqid()
    });

    const[diplomas, setDiplomas] = useState([]);

    const[workExp, setWorkExp] = useState({
      companyName : "",
      positionTitle : "",
      mainTasks : "",
      hiringDate : "",
      leavingDate : "",
      id : uniqid()
    });

    const[jobs, setJobs] = useState([]);

    const onSubmitTask = (e) => {
      e.preventDefault();
      switch(true){

        case(e.target.id == "basicIdentity"):
        updatePersonalInfos(e);
        break;

        case(e.target.id == "educationalExperience"):
        updateEducationalExperience(e);
        break;

        case(e.target.id == "workExperience"):
        updateWorkExperience(e);
        break;
      };
    };

    const updatePersonalInfos = (e) => {   
      setIdentity(prevState => ({ 
        ...prevState, 
        firstName:  e.target.firstName.value,
        lastName : e.target.name.value,
        email : e.target.email.value,
        phone : e.target.phone.value,
        jobArea :e.target.jobArea.value,
        jobTitle : e.target.nomPoste.value
      }));
    };

    const handleEducationalExp = e => {
      setDiploma(prevState => ({
        ...prevState,
          schoolName : e.target.parentNode.childNodes[2].value,
          degreeName : e.target.parentNode.childNodes[4].value,
          yearGraduated : e.target.parentNode.childNodes[6].value,
        }));
    };

    const updateEducationalExperience = e => {
      setDiplomas(prevState => [...prevState, diploma]);
      setDiploma(prevState => ({
        ...prevState,
        schoolName : "",
        degreeName : "",
        yearGraduated : "",
        id : uniqid()
      }));
    };

    const onDeleteElement = e => {
      //suppr un élément du array :
      let first = diplomas.findIndex(x => x.id == e.target.id);
      setDiplomas(diplomas.filter(x => x.id !== e.target.id));
    };
    

/* Fonction pour édit un diplôme : TBA !
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

    const handleWorkExperience = e => {
      console.log(e.target.parentNode.childNodes[2].value)
      setWorkExp(prevState => ({
        ...prevState,
        companyName :  e.target.parentNode.childNodes[2].value,
        positionTitle :  e.target.parentNode.childNodes[4].value,
        mainTasks :  e.target.parentNode.childNodes[6].value,
        hiringDate :  e.target.parentNode.childNodes[8].value,
        leavingDate :  e.target.parentNode.childNodes[10].value
      }));
    };

    const updateWorkExperience = e => {
      setJobs(prevState => [...prevState, workExp]);
      setWorkExp(prevState => ({
        companyName :  '',
        positionTitle :  '',
        mainTasks :  '',
        hiringDate :  '',
        leavingDate : '',
        id: uniqid()
      }))
    };
    console.log(diplomas);

    const onDeleteWorkElement = e => {
      let first = jobs.findIndex(x => x.id == e.target.id);
      setJobs(jobs.filter(x => x.id !== e.target.id));
    }

    return (
      <div className="Main">
        <main className="cvMainPart">

          <section id='leftPart'>
            <h2>Pour remplir votre CV...</h2>

            <BasicIdentity onSubmitTask={onSubmitTask}/>

            <EducationalExperience onSubmitTask={onSubmitTask} handleEducationalExp={handleEducationalExp}/>

            <WorkExperience onSubmitTask={onSubmitTask} handleWorkExperience={handleWorkExperience}/>
            
          </section>


          <section id='rightPart'>
            <h2>... Et le visualiser</h2>
              <div className="resumeArea">
                
                <div className='leftCol'>
                  <div className='contactBox'>
                      <h3>Contact :</h3>
                      <p>{identity.email}</p>
                      <p>{identity.phone}</p>
                      <p>{identity.jobArea}</p>
                  </div>
                  <div className='skillsBox'>
                      <h3>Compétences :</h3>
                  </div>
                </div>
                <div className='rightCol'>
                  <div className='nameJob'>
                    <h3 id="nomCV">{identity.firstName} {identity.lastName}</h3>
                    <h4 id="nomPoste">{identity.jobTitle}</h4>
                  </div>
                  <div className='educInfos'>
                    <Diplomas diplomas={diplomas} onDeleteElement={onDeleteElement} /*onEditEducationElement={onEditEducationElement}*//>
                  </div>
                  
                  <div className='proInfos'>
                    <ProExperiences jobs={jobs} onDeleteWorkElement={onDeleteWorkElement} />
                  </div>
                </div>
              </div>
          </section>    
        </main>
      </div>
    );
}

export default Main;