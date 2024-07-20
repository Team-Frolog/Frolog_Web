export interface ReviewForm {
  rating: number | null;
  oneLiner: string;
  review: string;
  pros: string[];
  cons: string[];
}
