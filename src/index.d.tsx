export interface IAnno {
  id: string;
  type: string;
  time: number;
  title: string;
  url: string;
  annotation: IImage | ILink | IText | IPerson;
}

export interface IText {
  text: string;
}

export interface IImage {
  image: string;
}

export interface ILink {
  link: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  type: string;
}
