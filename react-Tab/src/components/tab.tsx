import React, {useState} from "react";


export interface TabProps {
    ids: string[]
    contents: string[]
}


export function Tab(props: TabProps){
    const [activeContentTab, setActiveContentTab] = useState("Esse é o texto do Primeiro Tab");

    const handleTab = (index:number) => {
      setActiveContentTab(props.contents[index]);
      };


  return (

    <div className="main">
      {/* Tab nav */}
      <div className="nav">
      {props.ids.map((id, index) => <button onClick={() => handleTab(index)}>{id}</button>)}
      </div>
      <div className="outlet">
       <p>{activeContentTab}</p>
      </div>
    </div>
  );
};
export default Tab;