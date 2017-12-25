export interface Person {
  id: number;
  eye_color: string;
  films: any[]; // zmienic typ potem
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  homeworld: any;
  name: string;
  species: any;
  starships: any;
  vehicles: any;
  url: string;
  birth_year: string;
}
export interface Vehicle {
  id: number;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  crew: number;
  hair_color: string;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  name: string;
  model: string;
  passengers: number;
  pilots: any[];
  vehicle_class: string;
  url: string;
}
export interface Planet {
  id: number;
  climate: string;
  diameter: number;
  gravity: string;
  films: any[];
  name: string;
  orbital_period: number;
  population: number;
  residents: any[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}
export interface Species {
  id: number;
  average_height: number;
  average_lifespan: number;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  films: any[];
  homeworld: any;
  language: string;
  name: string;
  people: any[];
  skin_color: string;
  url: string;
}
export interface Film {
  id: number;
  characters: any[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: any[];
  producer: string;
  release_date: string;
  species: any[];
  starships: any[];
  title: string;
  vehicles: any[];
  url: string;
}
export interface Starship {
  id: number;
  MGLT: number;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  crew: number;
  films: any[];
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  pilots: any[];
  starship_class: string;
  url: string;
}
