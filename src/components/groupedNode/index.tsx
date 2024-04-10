import { useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export type PositionLoggerNodeData = {
  label?: string;
  connectedNodes?: { label: string }[];
};

export function GroupNode({ data }: NodeProps<PositionLoggerNodeData>) {
  const [expanded, setExpanded] = useState(false);

  const handleNodeClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`react-flow__node react-flow__node-default custom-node-1 ${expanded ? 'expanded' : ''}`}
      onClick={handleNodeClick}
    >
      {data.label && <div className="custom-node-text">{data.label}</div>}
      {expanded && data.connectedNodes && (
        <div>
          <p>Connected Nodes:</p>
          <ul>
            {data.connectedNodes.map((node, index) => (
              <li key={index}>{node.label}</li>
            ))}
          </ul>
        </div>
      )}

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
