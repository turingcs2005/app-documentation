export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export class AppDocument {
  constructor(
    public _id: string = '',  // _id field is created in MongoDB database
    public projectName: string = '',
    public owner: string = '',
    public backupOwner: string = '',
    public description: string = ''
  ) {}
}