import React,{useRef,useEffect ,useState} from 'react';
import './sideMenu.css';

function Sidemenu(props){

    const[actionData,setActionData]=useState({
        color:"#ff0000",
        penTool:{
            size:"10"
        },
        earseTool:{
            size:"10"
        },
        action:'createLine'
    });



    let actionProprty={
        color:"#3def01",
        penTool:{
            size:"10"
        },
        earseTool:{
            size:"10"
        },
        action:'createLine'
    }

    useEffect(()=>{

        props.action(actionData);
      //  setActionData(actionProprty)
    })


    var earse=()=>{
        actionProprty.action="earse";

        props.action(actionProprty);

        setActionData(actionProprty)
    }
    var createLine=()=>{

        actionProprty.action="createLine";
        props.action(actionProprty);

        setActionData(actionProprty)
    }
    var chnageColor=()=>{

    }

    var eventChange=(e)=>{
        console.log(e.target.value);
        actionProprty.color=e.target.value;
        props.action(actionProprty);
        setActionData(actionProprty)
    }



    return(
        <>
        {/* {actionData.action} */}
         <div className="menuBar">

             <ul>
                <li className={actionData.action=='createLine'?'activeAction':null}> 
                    <div className="editProperty" onClick={createLine} title="brush">
                        <img src={require('../../assets/paint-brush.png')} width="40" height="40"/>
                    </div>
                    {/* <div className="propertyDropdown">
                        vefervre
                    </div> */}
                </li>
                
                <li className={actionData.action=='earse'?'activeAction':null}> 
                    <div className="editProperty" onClick={earse} title="eareser">
                    <img src={require('../../assets/clean.png')} width="40" height="40"/>
                    </div>
                    {/* <div className="propertyDropdown">
                        Property
                    </div> */}
                </li>
                <li> 
                    <div className="editProperty" onClick={chnageColor}>
                       
                        <input type="color" name="color" value={actionData.color} onChange={e=>eventChange(e)}/>
                    </div>
                    {/* <div className="propertyDropdown">
                        Property
                    </div> */}
                </li>
             </ul>
         </div>
        </>
    )
}

export default Sidemenu;