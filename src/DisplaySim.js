import  React  from  'react';

const  DisplaySim = ({ simpson }) => {
    return (
        <div  className="DisplaySim">
           
            <ul className = "liste">
                
                <li>Nom : {simpson.character}</li>
               <li><img src={simpson.image}  alt="picture"  /></li>
                <li>Quote : {simpson.quote}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplaySim;