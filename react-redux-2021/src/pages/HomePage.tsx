import React from 'react';
import Employee from '../components/Employee';
import { apiEmployees } from '@/api/modules/employee';
import { useQuery } from 'react-query';

function HomePage() {
  const { data, error, isLoading } = useQuery('apiEmployee', apiEmployees);
  console.log(error);
  if (isLoading || data === undefined) return <div>.....기다리바</div>;
  return (
    <>
      <a href="/user">123</a>
      <div>
        {data.map((employee, index) => (
          <Employee {...employee} key={index} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
