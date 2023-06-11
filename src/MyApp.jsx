//import { useState } from "react";
import React, { useCallback,useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
//import"./style.css";
import { MarkerType, Position, Background } from "reactflow";
import { ShellBar, Avatar, ShellBarItem, Icon, Input } from "@ui5/webcomponents-react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ExcelToJsonConverter from "./exceltojsonconverter";
import axios from 'axios';

const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "input",
    data: { label: " CoiID" },
    style: {
      background: "#006400",
      color: "white"
    },

    position: { x: 0, y: 50 }
  },
  {
    id: "horizontal-2",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Treatment Order" },
    style: {
      background: "#006400",
      color: "white"
    },
    position: { x: 250, y: 50}
  },
  {
    id: "horizontal-3",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: " FP Shipment" },
    style: {
      background: "#D3D3D3",
      color: "Black"
    },

    position: { x: 500, y: 100 }
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: " Biospecimen Shipment" },
    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 500, y: 0 }
  },
  {
    id: "horizontal-5",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: " FP Shipment 2" },
    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 750, y: 100 }
  },
  {
    id: "horizontal-6",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: " FP Shipment Receipt Package" },
    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 1000, y: 100 }
  },
  {
    id: "horizontal-7",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: " BioSpecimen Collection" },

    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 750, y: 0 }
  },
  {
    id: "horizontal-8",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "BioSpecimen Shipment Information" },

    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 1000, y: 0 }
  },
  {
    id: "horizontal-9",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: " FP Shipment Receipt Content" },

    style: {
      background: "#D3D3D3",
      color: "Black"
    },
    position: { x: 250, y: 100 }
  }
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-3",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-4",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
    // label: "edge label"
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e5-9",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-6",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e4-7",
    source: "horizontal-4",
    type: "smoothstep",
    target: "horizontal-7",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-7",
    type: "smoothstep",
    target: "horizontal-8",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  },
  {
    id: "horizontal-e6-9",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-9",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30
    }
  }
];

export function MyApp() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clickedNodeId, setClickedNodeId] = useState(null); // Add state to track clicked node
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
  const handleNodeClick = useCallback((event, node) => {
    console.log(node.id);
    setClickedNodeId(node.id); // Update clickedNodeId state with the clicked node ID
    /*
    //GET
    const getRequest = async (data) => {

      const response  = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
    
      .then(function (response) {
    
        // handle success
    
        const jsonData = response.data;
    
        console.log(jsonData);
    
      })
    
      .catch(function (error) {
    
        // handle error
    
        console.log(error);
    
      })
    
      .finally(function () {
    
        // always executed
    
      });
    
    };
    */
  
  }, []);
  const getUpdatedNodeStyle = (node) => {
    const style = { ...node.style };
  if (node.id === clickedNodeId) {
    style.background = Background.Orange;
  } else {
    style.background = Background.Default;
  }
  return style;
  };
  const getUpdatedNode = (node) => {
    const style = getUpdatedNodeStyle(node);
    return { ...node, style };
  };  
  const updatedNodes = nodes.map(getUpdatedNode);

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };
  
  

  return (
    <div style={{ height: "300px" }}>
      <ShellBar
        logo={<img src="LOGO-SAP-1.png" />}
        onLogoClick={handleLogoClick}
        //menuItems={<><StandardListItem >Home</StandardListItem><StandardListItem >Login/Sign-up</StandardListItem><StandardListItem>Help Desk</StandardListItem></>}
        profile={<Avatar> <img src="profilePictureExample.png " /> </Avatar>}
        primaryTitle="SAP"
        searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
      >
        <ShellBarItem icon="add" text="add" />


      </ShellBar>
      <ExcelToJsonConverter />

      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height:"300px", background: "#f1f1f1" }}>
        <div style={{ height: "100%", width: "100%" ,padding:"10px",marginTop:"50px"}}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            onElementClick={handleNodeClick} // Add onElementClick prop
          //attributionPosition="bottom-left"
          ></ReactFlow>

        </div>
      </div>
    </div>
  );
};

//export default MyApp;


/*import React,{useState} from "react";
import { ShellBar,Avatar,ShellBarItem,Icon,Input, MenuItem, FormItem, FormGroup, CheckBox } from "@ui5/webcomponents-react";
import ExcelToJsonConverter from"./exceltojsonconverter";

import{Route,Routes,Navigate, useNavigate} from "react-router-dom";
import HorizontalFlow from "./horizontalflow";

export function MyApp(){
  const navigate=useNavigate();
const handleLogoClick=()=>{
navigate("./");
};

return (
  <div>

    <ShellBar
    logo={<img src="LOGO-SAP-1.png"/>}
    onLogoClick={handleLogoClick}
    //menuItems={<><StandardListItem >Home</StandardListItem><StandardListItem >Login/Sign-up</StandardListItem><StandardListItem>Help Desk</StandardListItem></>}
    profile={<Avatar> <img src="profilePictureExample.png "/> </Avatar>}
    primaryTitle="SAP"
    searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
    >
<ShellBarItem icon="add" text="add"/>


    </ShellBar>
    <ExcelToJsonConverter />
   <HorizontalFlow/>
    <Routes>



      <Route path="/horizontalflow" element={<HorizontalFlow />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>


    </div>
    )
    }
    /*
     <Form
    backgroundDesign="Transparent"

    style={{
      alignItems:"center"
    }}
    titleText="Demo Form">
      <FormItem label="ID">
        <input/>
      </FormItem>
      <FormGroup titleText="Personel Details">
        <FormItem label={<babel style={{alignSelf:"start",paddingTop:".25rem"}}>Name:</babel>}
        >
          <input/>
        </FormItem>
        <FormItem label="Address">
          <input/>
        </FormItem>
        <FormItem label="Phone Number">
          <input
          type="Number"
        maxLength="10"

          />
        </FormItem>
        <FormItem label="Email Id">
          <input
          type="Email"
          />
        </FormItem>
        <FormItem label="Home address">
          <CheckBox checked/>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Company Details">
        <FormItem label="Company Name">
          <input/>
        </FormItem>
        <FormItem label="Company city">
          <input/>
        </FormItem>
      </FormGroup>
    </Form>

    */
   //  <Route path="/horizontalflowchart" element={<HorizontalFlowChart />} />


