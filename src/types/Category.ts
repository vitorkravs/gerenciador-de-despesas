export interface Category {
  [tag: string]: {
    title: string;
    color: string;
    expense: boolean;
  };
}
