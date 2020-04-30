import Vehicle from "./Vehicle";

export default class Motorcycle extends Vehicle {
  constructor() {
    super(1);

    this.canFitInSpots = this.canFitInSpots.bind(this);
  }

  canFitInSpots(parkingSpot) {
    return true;
  }
}
