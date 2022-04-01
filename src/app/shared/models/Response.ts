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

export interface ComautonomaModel {
  ID: string;
  CODAUTON: string;
  CODCOMUN: string;
  NOMBRE: string;
}

export interface BreadcrumModel {
  name: string;
  url: string | null;
  title: string;
}
export interface BreadcrumsModel extends Array<BreadcrumModel> {}

export interface SingleProvinceModel {
  title: string;
  today: { p: string };
  tomorrow: { p: string };
  ciudades: CitiesModel;
  provincia: ProvinceModel;
  comautonoma: ComautonomaModel;
  breadcrumb: BreadcrumsModel;
  metadescripcion: string;
  keywords: string;
}

// All Provinces
export interface ProvinceModel {
  CAPITAL_PROVINCIA: string;
  CODAUTON: string;
  CODPROV: string;
  COMUNIDAD_CIUDAD_AUTONOMA: string;
  NOMBRE_PROVINCIA: string;
}
export interface ProvincesModel extends Array<ProvinceModel> {}
export interface AllProvincesModel {
  breadcrumb: BreadcrumModel;
  keywords: string;
  metadescripcion: string;
  provincias: ProvincesModel;
  title: string;
}
