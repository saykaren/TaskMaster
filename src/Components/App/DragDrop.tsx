import * as React from "react";
import { useState } from "react";

export interface DragDropProps {}

const DragDrop = ({}: DragDropProps) => {
  const [tasks, setTasks] = useState([
    { name: "Angular", category: "wip", bgcolor: "yellow" },
    { name: "React", category: "wip", bgcolor: "pink" },
    { name: "Vue", category: "complete", bgcolor: "skyblue" },

  ]);

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
    ev.dataTransfer.setData("id", id);
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
      <section className="taskContainer">
        <div
          className="taskWipComplete"
          id="wip"
          onDrop={(e) => onDrop(e, e.currentTarget.id)}
          onDragOver={(e) => {
            onDragOver(e);
          }}
        >
          <h1>WIP</h1>
          <div className="eachTaskContainer">
            {tasks &&
              tasks
                .filter((item) => item.category === "wip")
                .map((item, indexItem) => (
                  <div key={indexItem}>
                    <div
                      className="draggable"
                      draggable={true}
                      onDragStart={(e) => onDrageStart(e, item.name)}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div
          className="taskWipComplete"
          id="complete"
          onDrop={(e) => onDrop(e, e.currentTarget.id)}
          onDragOver={(e) => {
            onDragOver(e);
          }}
        >
          <h1>Complete</h1>
          <div className="eachTaskContainer">
            {tasks &&
              tasks
                .filter((item) => item.category === "complete")
                .map((item, indexItem) => (
                  <div
                    key={indexItem}
                    className="draggable"
                    draggable={true}
                    onDragStart={(e) => onDrageStart(e, item.name)}
                  >
                    {item.name}
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default DragDrop;
