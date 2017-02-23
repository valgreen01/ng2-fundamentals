export interface ICourse {
  id: number;
  name: string;
  description?: string;
  releasedDate: Date;
  duration?: string;
  authors: Array<string>;
}
