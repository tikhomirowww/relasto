export type PaginationItem = {
  page: any;
  currentPage: number;
  isDisabled?: boolean;
  onPageChange: (page: number) => void;
};
