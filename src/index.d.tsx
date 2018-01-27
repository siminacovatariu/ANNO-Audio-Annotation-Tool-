export interface IIanno {
  id: string;
  type: string;
  time: number;
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
