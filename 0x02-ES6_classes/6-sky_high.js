import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
