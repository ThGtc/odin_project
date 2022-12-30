import React from "react";

const BasicIdentity = (props) => {

    return(
        <div>
            <form id='basicIdentity' name='basicIdentity' onSubmit={props.onSubmitTask} >
                <fieldset className='basicForm'>
                    <legend>Informations personnelles</legend>
                    <label htmlFor='name'>Nom</label>
                    <input type='text' id='name' required/>

                    <label htmlFor='firstName'>Prénom</label>
                    <input type='text' id='firstName' required/>

                    <label htmlFor='email'>Mail</label>
                    <input type='email' id='email' required/>

                    <label htmlFor='phone'>Tel</label>
                    <input type='tel' id='phone' required/>

                    <label htmlFor='jobArea'>Localisation géographique</label>
                    <input type='text' id='jobArea' required/>
                    

                    <label htmlFor='nomPoste'>Poste visé</label>
                    <input type='text' id='nomPoste' required/>
                    
                    <button className='submitBtn' type='submit'>Générer les informations personnelles</button>
                </fieldset>
                </form>
        </div>
    )
    }


export default BasicIdentity;