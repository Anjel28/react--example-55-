export interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
  name: string;
}
