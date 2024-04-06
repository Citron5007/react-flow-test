import type { NodeProps } from 'reactflow';
import { Handle, Position } from 'reactflow';

export type PositionLoggerNodeData = {
  label?: string;
};

export function CustomNode({ data }: NodeProps<PositionLoggerNodeData>) {
  return (
    <div className="react-flow__node react-flow__node-default custom-node-1">
      {data.label && <div className="custom-node-text">{data.label}</div>}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
