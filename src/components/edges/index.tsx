import type { Edge, EdgeTypes } from 'reactflow';
import CustomEdge from '../edgeText';

export const initialEdges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    // type: 'smoothstep',
    style: {
      stroke: '#ABBFF5',
    },
  },
  {
    id: '1.5-2',
    source: '1.5',
    target: '2',
    // type: 'smoothstep',
    style: {
      stroke: '#ABBFF5',
    },
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    // type: 'smoothstep',
    type: 'custom-edge',
    label: 'READ',
    style: {
      stroke: '#ABBFF5',
    },
  },
  {
    id: '2-4',
    source: '2',
    target: '4',
    // type: 'smoothstep',
    type: 'custom-edge',
    label: 'READ',
    style: {
      stroke: '#ABBFF5',
    },
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here
  'custom-edge': CustomEdge,
} satisfies EdgeTypes;
