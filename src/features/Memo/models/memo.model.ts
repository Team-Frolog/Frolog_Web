export interface Memo {
  id: string;
  writer: string;
  isbn: string;
  content: string;
  is_public: boolean;
  images: string[];
  date: string;
  edit: string;
  is_first?: boolean;
  tags?: string[];
}
