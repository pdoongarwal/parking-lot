import SpotSize from "./SpotSize";

export default class Vehicle {
  constructor(spotsNeeded = 1) {
    this.parkingSpots = [];
    this.licensePlate = null;
    this.spotsNeeded = spotsNeeded;

    this.getSpotsNeeded = this.getSpotsNeeded.bind(this);
    this.getSpotSizeNeeded = this.getSpotSizeNeeded.bind(this);
    this.addParkingSpot = this.addParkingSpot.bind(this);
    this.clearSpots = this.clearSpots.bind(this);
    this.canFitInSpots = this.canFitInSpots.bind(this);
  }

  getSpotsNeeded() {
    return this.spotsNeeded;
  }

  getSpotSizeNeeded() {
    return this.spotSizeNeeded;
  }

  addParkingSpot(parkingSpot) {
    this.parkingSpots.push(parkingSpot);
  }

  clearSpots() {
    this.parkingSpots = [];
  }

  canFitInSpots(parkingSpot) {}
}
