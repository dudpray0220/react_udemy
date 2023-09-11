import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import Header from './components/UI/Header';
import ResultTable from './components/ResultTable/ResultTable';

function App() {
  const [yearlyData, setYearlyData] = useState([]); // per-year results

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    let newYearlyData = []; // 초기화

    // 객체로 form 결과 저장
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings, // total savings
        yearlyContribution: yearlyContribution,
      });
      // setYearlyData((prevState) => {
      //   return [
      //     ...prevState,
      //     {
      //       year: i + 1,
      //       yearlyInterest: yearlyInterest,
      //       savingsEndOfYear: currentSavings,
      //       yearlyContribution: yearlyContribution,
      //     },
      //   ];
      // });
    }
    setYearlyData(newYearlyData);

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <InputForm onSubmitData={calculateHandler} />
      <ResultTable result={yearlyData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
