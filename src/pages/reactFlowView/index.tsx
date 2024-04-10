import { Background, Controls, ReactFlowProvider, Viewport } from 'reactflow';
import { edgeTypes } from '../../components/edges';
import { nodeTypes } from '../../components/nodes';

import 'reactflow/dist/style.css';
import { StyledReactFlow } from './styles';
import { nodeData } from '../../configs/nodeData';
import { edgeData } from '../../configs/edgeData';

const defaultViewport: Viewport = { x: 125, y: 250, zoom: 1.3 };

function ReactFlowView() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <StyledReactFlow
          nodes={nodeData}
          edges={edgeData}
          nodeTypes={nodeTypes}
          attributionPosition="top-right"
          onlyRenderVisibleElements
          edgeTypes={edgeTypes}
          defaultViewport={defaultViewport}
          minZoom={1}
        >
          <Background color="#C5CFF2" style={{ backgroundColor: '#FFF' }} gap={10} size={2} />
          <Controls showFitView={false} showInteractive={false} />
        </StyledReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default ReactFlowView;
