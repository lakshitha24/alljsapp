import React from "react";

const Table = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Image</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">First Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Last Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Phone</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Gender</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
          <td className="px-16 py-2">
            <span>eeee</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
