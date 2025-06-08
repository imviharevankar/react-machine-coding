import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
};

const users: User[] = [
  { id: 1, name: "Alice", age: 28, city: "Delhi" },
  { id: 2, name: "Bob", age: 34, city: "Mumbai" },
  { id: 3, name: "Charlie", age: 22, city: "Bangalore" },
  { id: 4, name: "David", age: 40, city: "Chennai" },
  { id: 5, name: "Eve", age: 31, city: "Hyderabad" },
  { id: 6, name: "Frank", age: 29, city: "Pune" },
  { id: 7, name: "Grace", age: 35, city: "Kolkata" },
  { id: 8, name: "Hank", age: 26, city: "Ahmedabad" },
  { id: 9, name: "Ivy", age: 30, city: "Jaipur" },
  { id: 10, name: "Jack", age: 33, city: "Surat" },
];

const DataTable3 = () => {
  const [userList, setuserList] = useState(users);
  const [sortOrder, setOrder] = useState<"asc" | "dsc">("asc");
  const [sortKey, setSortKey] = useState<keyof User>("name");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const paginate = <T,>(data: T[], page: number, limit: number): T[] => {
    const start = (page - 1) * limit;
    return data.slice(start, start + limit);
  };

  const handleSorting = (key: keyof User, order: "asc" | "dsc" = "asc") => {
    const sortedData = [...userList].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "number" && typeof valB === "number") {
        return order === "asc" ? valA - valB : valB - valA;
      }

      if (typeof valA === "string" && typeof valB === "string") {
        return order === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return 0;
    });
    setOrder(order === "asc" ? "dsc" : "asc");
    setSortKey(key);
    setuserList(sortedData);
    setCurrentPage(1);
  };

  const paginatedData = paginate(userList, currentPage, itemsPerPage);

  return (
    <div>
      <p>Data Table III</p>
      <table className="">
        <thead>
          <tr className="flex">
            <th
              className="cursor-pointer flex gap-2"
              onClick={() => handleSorting("name", sortOrder)}
            >
              <p>Name</p>
              {sortOrder === "asc" && sortKey === "name" ? "↓" : "↑"}
            </th>
            <th
              className="cursor-pointer flex gap-2"
              onClick={() => handleSorting("age", sortOrder)}
            >
              <p>Age</p>
              {sortOrder === "asc" && sortKey === "age" ? "↓" : "↑"}
            </th>
            <th
              className="cursor-pointer flex gap-2"
              onClick={() => handleSorting("city", sortOrder)}
            >
              <p>City</p>
              {sortOrder === "asc" && sortKey === "city" ? "↓" : "↑"}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user) => (
            <tr key={user.id} className="">
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable3;
