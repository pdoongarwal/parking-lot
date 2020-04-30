import SpotType from "./SpotType";
import ParkingSpot from "./ParkingSpot";

class Row {
  constructor(level, row, spotType, rowLength) {
    this.spots = [];
    this.level = level;
    this.row = row;
    this.spotType = spotType;

    let parkingSpot;
    for (let i = 0; i < rowLength; i++) {
      parkingSpot = new ParkingSpot(level, row, idx + 1, spotType);
      this.spots.push(parkingSpot);
    }
  }
}

class Level {
  constructor(levelNumber) {
    this.level = levelNumber;
    this.rowCount = 3;

    const motercycleRow = new Row(this.level, 1, SpotType.MotorCycle, 5);
    const compactRow = new Row(this.level, 2, SpotType.Compact, 5);
    const largeRow = new Row(this.level, 3, SpotType.Large, 5);

    this.rows = [motercycleRow, compactRow, largeRow];
  }
}

export default class ParkingLot {
  constructor(levels) {
    this.parkingLot = [];

    for (let i = 0; i < levels; i++) {
      level = new Level(i + 1);
      this.parkingLot.append(level);
    }
  }
}
