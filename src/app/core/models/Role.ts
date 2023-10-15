/**
 * Role model used to store information about a role including id
 * and its name
 */
export class Role {

  private _id: number;
  private _name: string;

  constructor() {
    this._id = 0;
    this._name = "";
  }

  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }

  public set id(id:number) {
    this._id = id;
  }

  public set name(name:string) {
    this._name = name;
  }
}
