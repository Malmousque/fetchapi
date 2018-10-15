import  React  from  'react';

const  GenerateSim = ({SelectSim }) => {
    return (
        <div  className="GenerateSim">
        <button  onClick={SelectSim}>Get Simpson's character</button>
        </div>
    );
};

export  default  GenerateSim;