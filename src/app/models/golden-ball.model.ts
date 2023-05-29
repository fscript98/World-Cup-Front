import {GoldenBallService} from "../services/golden-ball.service";

export class GoldenBallModel {

  public static fromJson(json: Object): GoldenBallModel {
    return new GoldenBallModel(
      json['year'],
      json['winner'],
      json['second'],
      json['third'],
    );
  }
  constructor(
    public year: string = null,
    public winner: string = null,
    public second: string = null,
    public third: string = null,
  ) {
  }
}
