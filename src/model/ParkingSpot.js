export default class ParkingSpot {
  constructor(level, row, spotNumber, spotType) {
    this.vehicle = null;
    this.spotType = spotType;
    this.row = row;
    this.spotNumber = spotNumber;
    this.level = level;

    this.isAvailable = this.isAvailable.bind(this);
    this.getRow = this.getRow.bind(this);
    this.getSpotNumber = this.getSpotNumber.bind(this);
    this.getSpotType = this.getSpotType.bind(this);
    this.parkVehicle = this.parkVehicle.bind(this);
    this.removeVehicle = this.removeVehicle.bind(this);
  }

  isAvailable() {
    return this.vehicle === null;
  }

  getRow() {
    return this.row;
  }

  getSpotNumber() {
    return this.getSpotNumber;
  }

  getSpotType() {
    return this.spotType;
  }

  //   canFitVehicle(vehicle) {
  //     return vehicle.getSpotSizeNeeded === this.spotSize;
  //   }

  parkVehicle(vehicle) {
    this.vehicle = vehicle;
  }

  removeVehicle() {
    this.vehicle = null;
  }
}
