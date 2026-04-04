// Auto-generated TypeScript definitions for the robust database

export interface FileMetadata {
  version: string;
  generatedAt: string;
}

export interface Metadata {
  surfers?: FileMetadata;
  skins?: FileMetadata;
  boards?: FileMetadata;
  seasons?: FileMetadata;
  city_tour?: FileMetadata;
}

export interface Surfer {
  name: string;
  defaultSkinId: string;
  available: boolean;
  unlockType: number;
  skinIds: number[];
}

export interface Skin {
  name: string;
  localizationKey: string;
  available: boolean;
  unlockType: number;
  surferId: number;
}

export interface Board {
  name: string;
  localizationKey: string;
  isDefault: boolean;
  available: boolean;
  unlockType: number;
}

export interface Season {
  name: string;
  start: string;
  end: string;
}

export interface CityTourStage {
  [stage: string]: boolean[];
}

export interface CityTourChapter {
  [chapter: string]: CityTourStage;
}

export interface CityTourMode {
  [mode: string]: CityTourChapter;
}

export interface CityTourDistrict {
  [district: string]: CityTourMode;
}

export interface SurfersDB {
  [dataTag: string]: Surfer;
}

export interface SkinsDB {
  [dataTag: string]: Skin;
}

export interface BoardsDB {
  [dataTag: string]: Board;
}

export interface SeasonsDB {
  [id: string]: Season;
}

export interface CityTourDB {
  [district: string]: CityTourMode;
}
