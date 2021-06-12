export interface Container {
  id?: string,
  Id: string,
  Created: Date,
  Changed: Date,
  Image: string,
  RunCommand: { [k: string]: any },
  up: boolean,
  Host: string
}
