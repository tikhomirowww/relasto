import React, { FC } from 'react';

import { range } from '../../../utils/rangePagination';
import styles from './Pagination.module.scss';
import { PaginationPagesCutCount, PaginationProps } from './Pagination.types';
import PaginationItem from './PaginationItem';

const Pagination: FC<PaginationProps> = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getPageCut = ({ pagesCount, pagesCutCount, currentPage }: PaginationPagesCutCount) => {
    const ceiling = Number(Math.ceil(pagesCutCount / 2).toString()[0]);
    const floor = Number(Math.floor(pagesCutCount / 2).toString()[0]);
    if (pagesCount < pagesCutCount) {
      return { start: 1, end: pagesCount + 1 };
    }
    if (currentPage >= 1 && currentPage <= ceiling) {
      return { start: 1, end: pagesCutCount + 1 };
    }
    if (currentPage + floor >= pagesCount) {
      return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
    } else {
      return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
    }
  };

  const pagesCut = getPageCut({ pagesCount, pagesCutCount: 5, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <ul className={styles.paginate}>
      <PaginationItem
        page="First"
        currentPage={currentPage}
        onPageChange={() => onPageChange(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page="Prev"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage - 1)}
        isDisabled={isFirstPage}
      />
      {pages.map((page) => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
      <PaginationItem
        page="Next"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page="Last"
        currentPage={currentPage}
        onPageChange={() => onPageChange(pages.length)}
        isDisabled={isLastPage}
      />
    </ul>
  );
};

export default Pagination;
