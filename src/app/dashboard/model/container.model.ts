export interface Container {
  id?: string,
  Id: string,
  Created: Date,
  Changed: Date,
  up: boolean,
  Image: string,
  RunCommand: { [k: string]: any },
}
