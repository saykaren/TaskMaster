import * as React from "react";
import { useState } from "react";

export interface DragDropProps {}

const DragDrop = ({}: DragDropProps) => {
  const [tasks, setTasks] = useState([
    { name: "Angular", category: "wip", bgcolor: "yellow" },
    { name: "React", category: "wip", bgcolor: "pink" },
    { name: "Vue", category: "complete", bgcolor: "skyblue" },
  ]);
  console.log({ tasks });
  const onDragOver = (ev: React.SyntheticEvent<EventTarget>) => {
    ev.preventDefault();
  };

  const onDrageStart = (
    ev:
      | DataTransfer
      | React.SyntheticEvent<EventTarget>
      | React.DragEvent
      | JSX.Element
      | any,
    id: string
  ) => {
    console.log("dragstart:", id);
    //   console.log(ev.type);

    ev.dataTransfer.setData("id", id);

    // //   ev.dataTransfer.
    //   ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev: React.SyntheticEvent<EventTarget> | any, cat: string) => {
    const id = ev.dataTransfer.getData("id");

    const newTasks: any = [];
    tasks.map((item) => {
      if (item.name === id) {
        item.category = cat;
      }
      newTasks.push(item);
    });

    setTasks(newTasks);
  };

  return (
    <div className="containerDrag">
      Drag and drop
      <span className="task-header">WIP</span>
      <section>
        <div className="wip">
          <h1>Left</h1>
          {tasks &&
            tasks
              .filter((item) => item.category === "wip")
              .map((item, indexItem) => (
                <div key={indexItem}>
                
                  <div
                    className="draggable"
                    draggable={true}
                    onDragStart={(e) => onDrageStart(e, item.name)}
                    // onDragStart={(e)=>console.log(e)}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
        </div>
        <div className="wip">
          <h1>Right</h1>
          <span className="task-header">Complete</span>
          {tasks &&
            tasks
              .filter((item) => item.category === "complete")
              .map((item, indexItem) => (
                <div key={indexItem}>
                 
                  <div
                    className="droppable"
                    onDragOver={(e) => {
                      onDragOver(e);
                    }}
                    onDrop={(e) => onDrop(e, "complete")}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};
export default DragDrop;
