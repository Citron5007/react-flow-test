import { resourceData, roleData, userData } from './config';

const nodeUserData = userData.data;

const nodeRoleData = roleData.data;

const nodeResourceData = resourceData.data;

const transformNodeResourceData = (data: any) => {
  const transformedData = data.map((res: any, index: number) => ({
    id: res.id,
    metadata: { ...res },
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: <strong>{res.subType}</strong>,
    },
    position: { x: 800, y: index * 100 },
  }));

  return transformedData;
};

const transformNodeUserData = (data: any) => {
  const transformedData = data.map((user: any, index: number) => ({
    id: user.id,
    metadata: { ...user },
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: <strong>{user.firstName + ' ' + user.lastName}</strong> },
    position: { x: 100, y: index * 100 },
  }));

  return transformedData;
};

const transformNodeRoleData = (data: any) => {
  const transformedData = data.map((role: any, index: number) => ({
    id: role.id,
    metadata: { ...role },
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: <strong>{role.name}</strong>,
    },
    position: { x: 400, y: index * 100 },
  }));

  return transformedData;
};

const newUserData = transformNodeUserData(nodeUserData);

const newRoleData = transformNodeRoleData(nodeRoleData);

const newResourceData = transformNodeResourceData(nodeResourceData);

console.log(newUserData, 'node-user');
console.log(newRoleData, 'node-role');
console.log(newResourceData, 'node-reso');

export const nodeData = [...newUserData, ...newRoleData, ...newResourceData];
