export type PaginationProps = {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
};

export type PaginationPagesCutCount = {
  pagesCount: number;
  pagesCutCount: number;
  currentPage: number;
};
