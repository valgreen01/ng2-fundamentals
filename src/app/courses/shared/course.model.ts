export interface ICourse {
  id: number;
  name: string;
  description?: string;
  releasedDate: Date;
  duration?: number;
  authors: Array<string>;
}
