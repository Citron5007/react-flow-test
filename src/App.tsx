import ReactFlow, { Background, Controls, ReactFlowProvider, Viewport } from 'reactflow';
import { initialNodes, nodeTypes } from './components/nodes';
import { edgeTypes, initialEdges } from './components/edges';

import 'reactflow/dist/style.css';
import styled from 'styled-components';

const StyledReactFlow = styled(ReactFlow)`
  .react-flow__node {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #b3bac7;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
    }

    &.selected {
      border: 1px solid #8ba1f0;
      box-shadow: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 8px;
    }
  }

  .react-flow__handle {
    visibility: hidden;
  }

  .react-flow__node.react-flow__node-default {
    width: auto;
  }

  .react-flow__node-default.custom-node-1 {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-flow__attribution {
    visibility: hidden;
  }
`;

const defaultViewport: Viewport = { x: 125, y: 250, zoom: 1.3 };

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <StyledReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          attributionPosition="top-right"
          onlyRenderVisibleElements
          edgeTypes={edgeTypes}
          defaultViewport={defaultViewport}
        >
          <Background color="#C5CFF2" style={{ backgroundColor: '#FFF' }} gap={10} size={2} />
          <Controls />
        </StyledReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
