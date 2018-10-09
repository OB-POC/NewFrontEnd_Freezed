import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'


export default class Header extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
            <div >
              <div className = 'Rectangle-2' style = {{display:'flex',justifyContent:'space-between'}}>
              <div style = {{padding:"20px"}}>
              <span className = 'OPEN-BANK'>OPEN BANKING</span>
              </div>
              <div style= {{display:"flex",paddingRight:'50px'}}>
              <div style= {{padding:"15px",borderRight:'solid 0.5px #979797'}}>
              <img className = "notification-1"src = 'images/not.png' />
              </div>
              <div style= {{padding:"15px"}}>
              <img className = "img_user" src = 'images/img-u.png' />
              </div>
              <div style= {{padding:"17px",paddingLeft:'0'}}>
              <span className = 'Alice-Salas'>Alice Salas</span>
              </div>
              </div>
              </div>
            </div>
        );
    }
}