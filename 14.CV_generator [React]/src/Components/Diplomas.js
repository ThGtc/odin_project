import React, { Component } from "react";

class Diplomas extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3 className="interTitles">Formations :</h3>
                {this.props.diplomas.map((diploma) => {
                    return <li 
                        id={diploma.id} key={diploma.id}> {diploma.schoolName} : {diploma.degreeName} - {diploma.yearGraduated}  
                        <button className="delBtn" title="Supprimer le diplôme" onClick={this.props.onDeleteElement} id={diploma.id}>x</button>
                        {/* <button onClick={this.props.onEditEducationElement} id={diploma.id}>Edit</button> */}
                        </li>
                })}
            </div>
        )
    }

}

export default Diplomas;