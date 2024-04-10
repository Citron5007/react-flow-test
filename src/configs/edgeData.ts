import { Edge } from 'reactflow';

const edgeStyle = { stroke: '#ABBFF5', strokeWidth: 2 };

export const edgeData = [
  {
    id: '64a2be96016941a48f4ad1ae-64a2bf02016941a48f4ad1b0',
    source: '64a2be96016941a48f4ad1ae',
    target: '64a2bf02016941a48f4ad1b0',
    style: edgeStyle,
  },
  {
    id: '64a2be96016941a48f4ad1ae-64a2bf02016941a48f4ad1b1',
    source: '64a2be96016941a48f4ad1ae',
    target: '64a2bf02016941a48f4ad1b1',
    style: edgeStyle,
  },
  {
    id: '64a2bf02016941a48f4ad1b0-64a2bf3b016941a48f4ad1b2',
    source: '64a2bf02016941a48f4ad1b0',
    target: '64a2bf3b016941a48f4ad1b2',
    type: 'custom-edge',
    label: 'read',
    style: edgeStyle,
  },
  {
    id: '64a2bf02016941a48f4ad1b1-64a2bf3b016941a48f4ad1b2',
    source: '64a2bf02016941a48f4ad1b1',
    target: '64a2bf3b016941a48f4ad1b2',
    type: 'custom-edge',
    label: 'read',
    style: edgeStyle,
  },
  {
    id: '64a2bf02016941a48f4ad1b1-64a2bf3b016941a48f4ad1b3',
    source: '64a2bf02016941a48f4ad1b1',
    target: '64a2bf3b016941a48f4ad1b3',
    type: 'custom-edge',
    label: 'write',
    style: edgeStyle,
  },
] satisfies Edge[];
