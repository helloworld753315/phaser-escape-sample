export interface WindowConfig{
  width: number,
  height: number,
  backgroundColor: string
}

// default 1280, 720
export const windowConfig: WindowConfig = {
  width: 960,
  height: 540,
  backgroundColor: '0xcdcdcd'
}

export class Room{
  static readonly door = {
    x: 362, 
    y: 210, 
    width: 62,
    height: 132
  }

  static readonly bed = {
    x: 0, 
    y: 330, 
    width: 300,
    height: 180
  }

  static readonly desk = {
    x: 720, 
    y: 200, 
    width: 260,
    height: 300
  }

  static readonly chest = {
    x: 610,
    y: 170,
    width: 120,
    height: 220
  }
}