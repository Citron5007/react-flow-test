import type { NodeTypes } from 'reactflow';
import { PositionLoggerNode } from './positionLoggerNode';
import { CustomNode } from './customNode';
import AWS from '../../assets/icons/aws';
import { GroupNode } from '../groupedNode';
export const initialNodes: any = [
  {
    id: '1',
    sourcePosition: 'right',
    type: 'input',
    position: { x: 0, y: 50 },
    data: { label: <strong>Yashveer S.</strong> },
  },
  {
    id: '1.5',
    sourcePosition: 'right',
    type: 'input',
    position: { x: 0, y: -50 },
    data: { label: <strong>Donatello</strong> },
  },
  {
    id: '2',
    type: 'custom-node',
    position: { x: 350, y: 50 },
    data: {
      label: (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
          <AWS />
          temp-project-s3-policy
        </div>
      ),
    },
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '3',
    type: 'custom-node',
    position: { x: 800, y: 50 },
    data: {
      label: (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
          <AWS />
          s3-bucket-2345123
        </div>
      ),
    },
    sourcePosition: 'left',
    targetPosition: 'left',
  },
  {
    id: '4',
    type: 'custom-node',
    position: { x: 800, y: -50 },
    data: {
      label: (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
          <AWS />
          s3-bucket
        </div>
      ),
    },
    sourcePosition: 'left',
    targetPosition: 'left',
  },
];

export const nodeTypes: NodeTypes = {
  'position-logger': PositionLoggerNode,
  'custom-node': CustomNode,
  'group-node': GroupNode,
};
