import React from 'react';
import { Link } from 'react-router-dom';

const Donation = () => {
  const totalReceived = 10000; // Replace with actual data
  const expenses = [
    { category: 'Food', amount: 3000 },
    { category: 'Shelter', amount: 2500 },
    { category: 'Education', amount: 2000 },
    { category: 'Healthcare', amount: 1500 },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg md:p-6 lg:p-8">
    <h2 className="text-lg font-bold mb-4 text-gray-800 md:text-xl lg:text-2xl">
      Donation Update
    </h2>
    <div className="overflow-x-auto md:overflow-visible">
      <table className="table-auto w-full md:w-3/4 lg:w-2/3 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 md:px-6 lg:px-8">Category</th>
            <th className="px-4 py-2 md:px-6 lg:px-8">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 md:px-6 lg:px-8">{expense.category}</td>
              <td className="px-4 py-2 md:px-6 lg:px-8 text-red-600">
                ${expense.amount}
              </td>
            </tr>
          ))}
          <tr className="border-b">
            <td className="px-4 py-2 md:px-6 lg:px-8 font-bold">
              Total Received
            </td>
            <td className="px-4 py-2 md:px-6 lg:px-8 text-green-600">
              ${totalReceived}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 md:px-6 lg:px-8 font-bold">
              Total Spent
            </td>
            <td className="px-4 py-2 md:px-6 lg:px-8 text-red-600">
              ${expenses.reduce((acc, expense) => acc + expense.amount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mt-4 md:mt-6 lg:mt-8 flex justify-center">
        <Link to="/donationForm" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8">
          Donate Now
        </Link>
      </div>
  </div>
  );
};

export default Donation;