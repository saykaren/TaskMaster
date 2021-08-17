import * as React from "react";
import { useState } from "react";
import sayKaren from "../../Assets/sayKaren_Black.png";

export interface DragDropProps {}

const DragDrop = ({}: DragDropProps) => {
  const [tasks, setTasks] = useState([
    { name: "Clean car", category: "wip", bgcolor: "yellow" },
    { name: "Laundry", category: "wip", bgcolor: "pink" },
    { name: "Code", category: "wip", bgcolor: "skyblue" },
    { name: "Cook", category: "wip", bgcolor: "skyblue" },
    { name: "Workout", category: "wip", bgcolor: "skyblue" },
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
    console.log({ id });
    console.log({ ev });
  };

  const onPanStart = (
    ev:
      | DataTransfer
      | React.SyntheticEvent<EventTarget>
      | React.DragEvent
      | JSX.Element
      | any,
    itemName: string,
    itemCategory: string
  ) => {
    // console.log({ itemName });
    // console.log({ ev });
    // const startIt = ev.type;
    // console.log({ startIt });
    if (ev.type === "touchstart") {
      // const testing = ev.changedTouches[0].target;
    }
    if (ev.type === "touchmove") {
      const moving = ev.target;
      // got to work on
    }
    if (ev.type === "touchend") {
      // console.log({ ev });
      ev.touches = { itemName: itemName, itemCategory: itemCategory };
      const newTasks: any = [];
      tasks.map((item) => {
        if (item.name === itemName) {
          item.category =
            ev.touches.itemCategory === "wip" ? "complete" : "wip";
        }
        newTasks.push(item);
      });
      console.log({ newTasks });
      setTasks(newTasks);
    }
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
                      className="draggable WIP"
                      draggable={true}
                      onDragStart={(e) => onDrageStart(e, item.name)}
                      onTouchStart={(e) =>
                        onPanStart(e, item.name, item.category)
                      }
                      onTouchMove={(e) =>
                        onPanStart(e, item.name, item.category)
                      }
                      onTouchEnd={(e) =>
                        onPanStart(e, item.name, item.category)
                      }
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
                    className="draggable complete"
                    draggable={true}
                    onDragStart={(e) => onDrageStart(e, item.name)}
                    onTouchStart={(e) =>
                      onPanStart(e, item.name, item.category)
                    }
                    onTouchMove={(e) =>
                      onPanStart(e, item.name, item.category)
                    }
                    onTouchEnd={(e) =>
                      onPanStart(e, item.name, item.category)
                    }
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
