import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {generatePageNumbers().map((page) => (
          <li
            key={page}
            className={`px-3 py-2 rounded cursor-pointer ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
