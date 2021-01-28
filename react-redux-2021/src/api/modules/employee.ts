import axios from 'axios';

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

export const apiEmployees = (): Promise<IEmployee[]> => {
  return axios('http://dummy.restapiexample.com/api/v1/employees').then(
    (res) => {
      if (res.statusText !== 'OK') {
        throw new Error(res.statusText);
      }
      return res.data.data as Promise<IEmployee[]>;
    },
  );
};
