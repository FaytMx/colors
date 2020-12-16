export interface Colors {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}

export interface Color {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
