import ReactFlow from 'reactflow';
import styled from 'styled-components';

export const StyledReactFlow = styled(ReactFlow)`
  .react-flow__node {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #b3bac7;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 8px;
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
    height: auto;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
    }

    &.selected {
      border: 1px solid #8ba1f0;
      box-shadow: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 8px;
    }
  }

  .react-flow__attribution {
    visibility: hidden;
  }
`;
