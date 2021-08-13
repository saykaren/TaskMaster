import * as React from 'react';

export interface TaskContainerProps {
    // onDrop: (arg1: React.SyntheticEvent<EventTarget> | any, arg2: string)=>void;
    // onDragOver: (arg1: React.SyntheticEvent<EventTarget>) => void;
    
    // onDrageStart: (arg1:  | DataTransfer
    //     | React.SyntheticEvent<EventTarget>
    //     | React.DragEvent
    //     | JSX.Element
    //     | any, arg2: string)=>void;
}
 
const TaskContainer = ({}: TaskContainerProps) => {
    return ( <></>

    //     <div
    //     className="wip"
    //     id="wip"
    //     onDrop={(e) => onDrop(e, e.currentTarget.id)}
    //     onDragOver={(e) => {
    //       onDragOver(e);
    //     }}
    //   >
    //     <h1>Left</h1>
    //     {tasks &&
    //       tasks
    //         .filter((item) => item.category === "wip")
    //         .map((item, indexItem) => (
    //           <div key={indexItem}>
    //             <div
    //               className="draggable"
    //               draggable={true}
    //               onDragStart={(e) => onDrageStart(e, item.name)}
    //             >
    //               {item.name}
    //             </div>
    //           </div>
    //         ))}
    //   </div>
     );
}
 
export default TaskContainer;