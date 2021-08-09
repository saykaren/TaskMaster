import * as React from 'react';
import { useState } from 'react';

export interface DragDropProps {
    
}
 
const DragDrop = ({}: DragDropProps) =>{
    const [tasks, setTasks] = useState(
        [{name: "Angular", category: "wip", bgcolor: "yellow"},
        {name: "React", category: "wip", bgcolor: "pink"},
        {name: "Vue", category: "complete", bgcolor: "skyblue"},
    ]
    )
    

    return(
        <div className="containerDrag">
            Drag and drop
            {/* {tasks && tasks.map((item, indexItem) =>(
                <div key={indexItem}>
                    {item.name}
                    </div>
            ))} */}
            <section>
            <div>
                <h1>Left</h1>
                {tasks && tasks.filter(item=> item.category==="wip")
                .map((item, indexItem) =>(
                <div key={indexItem}>
                    {item.name}
                    </div>
            ))}
            </div>
            <div>
                <h1>Right</h1>
                {tasks && tasks.filter(item=> item.category==="complete")
                .map((item, indexItem) =>(
                <div key={indexItem}>
                    {item.name}
                    </div>
            ))}
            </div>
            </section>
        </div>
    );
}
export default DragDrop;