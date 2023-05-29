
export class WorldCupModel {

  public static fromJson(json: Object): WorldCupModel {
    return new WorldCupModel(
      json['year'],
      json['champion'],
      json['second'],
      json['third'],
      json['host'],
      json['nbTeams'],
      json['nbMatches'],
      json['nbGoals'],
    );
  }
  constructor(
    public year: string = null,
    public champion: string = null,
    public second: string = null,
    public third: string = null,
    public host: string = null,
    public nbTeams: number = null,
    public nbMatches: number = null,
    public nbGoals: number = null,
  ) {
  }
}
