export default interface Cargo {
  _id?: string,
  name: string,
  code: number,
  weight: number,
  planetDestination?: string,
  stationDestination?: number
}
