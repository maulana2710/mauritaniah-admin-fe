import { useState } from "react";
import Pagination from "./Pagination";

export default function Table({ userData, titleTable }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <table className="overflow-x-scroll">
        <thead>
          <tr>
            {titleTable.map((value) => {
              return <th className="border-2 border-primary">{value}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border-2 border-primary">
          {currentItems.map((value, index) => {
            return (
              <tr>
                <td className="border-2 border-primary text-center px-2">{index + 1}</td>
                <td className="border-2 border-primary px-2">{value.firstName + ' ' + value.lastName}</td>
                <td className="border-2 border-primary text-center px-2">{value.birthDate}</td>
                <td className="border-2 border-primary px-2">{value.ein}</td>
                <td className="border-2 border-primary px-2">{value.university}</td>
                <td className="border-2 border-primary px-2">{value.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
