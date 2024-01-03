import { useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function Table({ userData, titleTable, active }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const TableUser = () => {
    return currentItems.map((value, index) => (
      <tr key={index}>
        <td className="border-2 border-primary text-center px-2">{index + 1}</td>
        <td className="border-2 border-primary px-2">{value.firstName + ' ' + value.lastName}</td>
        <td className="border-2 border-primary text-center px-2">{value.birthDate}</td>
        <td className="border-2 border-primary px-2">{value.ein}</td>
        <td className="border-2 border-primary px-2">{value.university}</td>
        <td className="border-2 border-primary px-2">{value.lastName}</td>
        <td className="border-2 border-primary p-2 flex justify-around">
          <Link to={`${value.id}`} className="border rounded p-1 bg-green-500 text-white me-2 xl:me-0">Update</Link>
          <Link to={`${value.id}`} className="border rounded p-1 bg-red-500 text-white me-2 xl:me-0">Delete</Link>
        </td>
      </tr>
    ));
  }
  const TableKeuangan = () => {
    return currentItems.map((value, index) => (
      <tr key={index}>
        <td className="border-2 border-primary text-center px-2">{index + 1}</td>
        <td className="border-2 border-primary px-2">{value.firstName + ' ' + value.lastName}</td>
        <td className="border-2 border-primary text-center px-2">{value.birthDate}</td>
        <td className="border-2 border-primary px-2">{value.ein}</td>
        <td className="border-2 border-primary px-2">{value.university}</td>
        <td className="border-2 border-primary px-2">{value.lastName}</td>
        <td className="border-2 border-primary p-2">
          <Link to={`${value.id}`} className="border rounded p-1 bg-green-500 text-white me-2">Update</Link>
          <Link to={`${value.id}`} className="border rounded p-1 bg-red-500 text-white me-2">Delete</Link>
        </td>
      </tr>
    ));
  }
  return (
    <>
      <table className="overflow-x-scroll w-full">
        <thead>
          <tr>
            {titleTable.map((value, index) => {
              return <th key={index} className="border-2 border-primary">{value}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border-2 border-primary">
          {active === 'user' && <TableUser />}
          {active === 'finance' && <TableKeuangan />}
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
