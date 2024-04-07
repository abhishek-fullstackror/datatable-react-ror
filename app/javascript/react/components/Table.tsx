import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  
  const columns = [
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: (row) => row.phone,
        sortable: true,
    },
    {
        name: 'Address',
        selector: (row) => row.address,
        sortable: true,
    },
];

  return (
    <div className='container my-5'>
      <DataTable
        columns={columns}
        data={users}
        pagination // Enable pagination
        responsive // Enable responsive design
        striped // Add zebra-striping to the table rows
        highlightOnHover // Highlight row on hover
        pointerOnHover // Change cursor to pointer on hover
      />
    </div>
  );
};

export default Table;
