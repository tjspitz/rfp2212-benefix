import React, { useState } from 'react';
import AddScenario from './AddScenario.jsx';

const OnePlan = ({
  key, planName, planType, coverageType,
  deductible, oop, coinsurance,
  premium, premFreq, pcCoinsurance,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="one-plan container">
      <table className="one-plan info">
        <tbody>
          <tr className="fake-header">
            <td>Plan Name</td>
            <td>Plan Type</td>
            <td>Coverage Type</td>
          </tr>
          <tr className="info-data">
            <td>{planName}</td>
            <td>{planType}</td>
            <td>{coverageType}</td>
          </tr>
          <tr className="fake-header">
            <td>Deductible</td>
            <td>OOP</td>
            <td>Coinsurance</td>
          </tr>
          <tr className="info-data">
            <td>{deductible}</td>
            <td>{oop}</td>
            <td>{coinsurance}</td>
          </tr>
          <tr className="fake-header">
            <td>Premium</td>
            <td>Premium Frequency</td>
            <td>Preventitive Care</td>
          </tr>
          <tr className="info-data">
            <td>{premium}</td>
            <td>{premFreq}</td>
            <td>{pcCoinsurance}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="add-scenario btn"
        type="button"
        onClick={() => setVisible(!visible)}
      >
        Add New Scenario
      </button>
      <AddScenario
        id={key}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};
export default OnePlan;
