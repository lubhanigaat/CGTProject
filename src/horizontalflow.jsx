import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { MarkerType, Position, Background } from "reactflow";

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
   
    position: { x: 0, y: 80 }
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
    position: { x: 250, y: 80 }
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

    position: { x: 500, y: 160 }
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
    position: { x: 750, y: 160 }
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
    position: { x: 1000, y: 160 }
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
    position: { x: 1250, y: 160 }
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

const HorizontalFlow = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
    ></ReactFlow>
  );
};

export default HorizontalFlow;

