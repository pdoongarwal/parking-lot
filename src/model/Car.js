import Vehicle from "./Vehicle";
import SpotType from "./SpotType";

export default class Car extends Vehicle {
  constructor() {
    super(1);

    this.canFitInSpots = this.canFitInSpots.bind(this);
  }

  canFitInSpots(parkingSpot) {
    const spotSize = parkingSpot.getSpotType();
    return spotSize === SpotType.Compact || spotSize === SpotType.Large;
  }
}
