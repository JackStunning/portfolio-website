import { useState } from 'react';
import Draggable from 'react-draggable';

const Clock = (props) => {
  const [isActive, setIsActive] = useState(false);
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  console.log("minute", minute.toString().length)

  if(props.props === true && isActive !== true){
    setIsActive(true)
  } 
  if(props.props === false && isActive !== false){
    setIsActive(false)
  }

  console.log("clock props", props)
  if(isActive === true){
    return (
      <Draggable>
        <div className="Clock">
          <div className="clock-x-button-div">
          <p className="clock-title"><strong>Clock</strong></p>
            <button className="clock-x-button" onClick={() => {props.setClose(false)}}>x</button>
          </div>
          <p className="clock-text">{hour.toString()}:{minute.toString().length < 2 ? "0"+minute.toString() : minute.toString()}</p>
        </div>
      </Draggable>
    )
  } else {
    return null;
  }

}

export default Clock