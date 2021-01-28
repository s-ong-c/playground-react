import React from 'react';
import { IEmployee } from '../api/modules/employee';

interface IProps extends IEmployee {}

function Employee({
  employee_name,
  employee_salary,
  employee_age,
  profile_image,
}: IProps) {
  return (
    <div>
      <span>{employee_name}</span>
      <span>{employee_salary}</span>
      <span>{employee_age}</span>
      <span>{profile_image}</span>
    </div>
  );
}

export default Employee;
