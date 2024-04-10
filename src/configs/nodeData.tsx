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

const newResourceData = transformNodeResourceData(nodeResourceData);

const transformNodeRoleData = (roles: any[], resources: any[]) => {
  const transformedData = roles.reduce((acc: any, role: any, index: number) => {
    const filteredResources = resources.filter((resource) => {
      return (
        resource.metadata.permissions &&
        resource.metadata.permissions.some((permission: any) => {
          return (
            role.permissions &&
            role.permissions.some((rolePermission: any) => rolePermission.id === permission.permissionId)
          );
        })
      );
    });

    acc[role.id] = {
      id: role.id,
      metadata: { ...role },
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <strong>{role.name}</strong>,
      },
      resources: filteredResources,
      position: { x: 400, y: index * 100 },
    };

    return acc;
  }, {});

  return transformedData;
};

const newRoleData = transformNodeRoleData(nodeRoleData, newResourceData);

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

const newUserData = transformNodeUserData(nodeUserData);

console.log(newUserData, 'node-user');
console.log(newRoleData, 'node-role');

export const nodeData = [...newUserData];
