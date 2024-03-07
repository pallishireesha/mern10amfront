import React, { useState } from 'react';

const InterestCalculator = () => {
  const [dueDate, setDueDate] = useState('');
  const [dateOfFiling, setDateOfFiling] = useState('');
  const [delayDays, setDelayDays] = useState(0);
  const [cgstAmount, setCgstAmount] = useState(0);
  const [sgstAmount, setSgstAmount] = useState(0);
  const [cgstInterest, setCgstInterest] = useState(0);
  const [sgstInterest, setSgstInterest] = useState(0);

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleDateOfFilingChange = (e) => {
    setDateOfFiling(e.target.value);
  };

  const calculateDelayDays = () => {
    const dueDateObj = new Date(dueDate);
    const dateOfFilingObj = new Date(dateOfFiling);

    const timeDifference = dateOfFilingObj.getTime() - dueDateObj.getTime();
    const calculatedDelayDays = Math.round(timeDifference / (1000 * 60 * 60 * 24));

    setDelayDays(calculatedDelayDays);

    // Assuming CGST and SGST amounts are entered as input fields
    const cgstAmountValue = parseFloat(document.getElementById("cgstAmount").value) || 0;
    const sgstAmountValue = parseFloat(document.getElementById("sgstAmount").value) || 0;

    // Calculating CGST and SGST interest
    const interestRate = 18 / 100;
    const calculatedCgstInterest = (calculatedDelayDays / 365) * interestRate * cgstAmountValue;
    const calculatedSgstInterest = (calculatedDelayDays / 365) * interestRate * sgstAmountValue;

    setCgstInterest(calculatedCgstInterest.toFixed(2));
    setSgstInterest(calculatedSgstInterest.toFixed(2));

    // Updating CGST and SGST amounts
    setCgstAmount(cgstAmountValue.toFixed(2));
    setSgstAmount(sgstAmountValue.toFixed(2));
  };

  return (
    <div>
      <h1>GST Interest Calculator</h1>

      <div>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={handleDueDateChange} />
      </div>
      <div>
        <label>Date of Filing:</label>
        <input type="date" value={dateOfFiling} onChange={handleDateOfFilingChange} />
      </div>
      <div>
        <label>CGST Amount:</label>
        <input type="text" id="cgstAmount" />
      </div>
      <div>
        <label>SGST Amount:</label>
        <input type="text" id="sgstAmount" />
      </div>

      <button onClick={calculateDelayDays}>Calculate and Display Results</button>

      <table className="mb-3"border="1">
        <thead>
          <tr>
            <th>Delay Days</th>
            <th>CGST Amount</th>
            <th>SGST Amount</th>
            <th>CGST Interest</th>
            <th>SGST Interest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{delayDays}</td>
            <td>{cgstAmount}</td>
            <td>{sgstAmount}</td>
            <td>{cgstInterest}</td>
            <td>{sgstInterest}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InterestCalculator;
