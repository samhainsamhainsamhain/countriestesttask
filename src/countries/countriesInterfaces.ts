export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  flags: {
    png: string;
    svg: string;
  };
  languages: [{ [key: string]: string }];
  borders: string[];
}
