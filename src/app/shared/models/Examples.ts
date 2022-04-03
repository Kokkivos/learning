export interface StateSkyModel {
  description: string;
  id: string;
}
export interface TemperaturesModel {
  max: string;
  min: string;
}

export interface CityModel {
  id: string;
  idProvince: string;
  name: string;
  nameProvince: string;
  stateSky: StateSkyModel;
  temperatures: TemperaturesModel;
}
export interface CitiesModel extends Array<CityModel> {}
