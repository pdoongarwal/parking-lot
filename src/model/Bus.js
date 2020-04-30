import Vehicle from "./Vehicle";
import SpotType from "./SpotType";

export default class Bus extends Vehicle {
  constructor() {
    super(5);

    this.canFitInSpots = this.canFitInSpots.bind(this);
  }

  canFitInSpots(parkingSpot) {
    return parkingSpot.getSpotType() === SpotType.Large;
  }
}
