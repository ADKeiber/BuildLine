import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: 'Change Status',
        data: 'Documents Folder',
        children: [
          { key: '0-0', label: 'Completed', data: 'Expenses Document' },
          { key: '0-1', label: 'Not Started', data: 'Resume Document' },
          { key: '0-0', label: 'Pushed Back', data: 'Expenses Document' },
          { key: '0-1', label: 'In Progress', data: 'Resume Document' },
          { key: '0-0', label: 'Blocked', data: 'Expenses Document' },
        ]
      },
      {
        key: '1',
        label: 'Update Section',
        data: 'Events Folder',
        children: [
          { key: '1-0', label: 'Meeting', data: 'Meeting' },
          { key: '1-1', label: 'Product Launch', data: 'Product Launch' },
          { key: '1-2', label: 'Report Review', data: 'Report Review' }
        ]
      },
    ];
  }
  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }
}
