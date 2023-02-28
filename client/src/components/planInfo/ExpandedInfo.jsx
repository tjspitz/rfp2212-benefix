/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const ExpandedInfo = ({
  expandedPlanData, setExpandedPlanData, setInfoProgress,
}) => {
  const [pcSlider, setPcSlider] = useState(0);
  const [specSlider, setSpecSlider] = useState(20);
  const [testSlider, setTestSlider] = useState(20);
  const [imgSlider, setImgSlider] = useState(20);
  const [urgSlider, setUrgSlider] = useState(20);
  const [erSlider, setErSlider] = useState(20);

  const handleContinueClick = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    setExpandedPlanData(Object.assign(expandedPlanData, formData));
    setInfoProgress(2);
  };

  const handlePcSliderChange = (e) => {
    setPcSlider(e.target.value);
  };

  const handleSpecSliderChange = (e) => {
    setSpecSlider(e.target.value);
  };

  const handleTestSliderChange = (e) => {
    setTestSlider(e.target.value);
  };

  const handleImgSliderChange = (e) => {
    setImgSlider(e.target.value);
  };

  const handleUrgSliderChange = (e) => {
    setUrgSlider(e.target.value);
  };

  const handleErSliderChange = (e) => {
    setErSlider(e.target.value);
  };

  return (
    <div className="plan-info">
      <h4>Additional Plan Information</h4>
      <form onSubmit={handleContinueClick}>
        <label htmlFor="pcCoinsurance">
          Primary Care Coinsurance:
          <input
            type="range"
            name="pcCoinsurance"
            min="0"
            max="100"
            step="10"
            value={pcSlider}
            onChange={handlePcSliderChange}
          />
          <p>Percent <em>you</em> pay: {pcSlider}&#37;</p>
        </label>
        <label htmlFor="scCoinsurance">
          Specialist Care Coinsurance:
          <input
            type="range"
            name="scCoinsurance"
            min="0"
            max="100"
            step="10"
            value={specSlider}
            onChange={handleSpecSliderChange}
          />
          <p>Percent <em>you</em> pay: {specSlider}&#37;</p>
        </label>
        <label htmlFor="diagCoinsurance">
          Diagnostic/Basic Testing Coinsurance:
          <input
            type="range"
            name="diagCoinsurance"
            min="0"
            max="100"
            step="10"
            value={testSlider}
            onChange={handleTestSliderChange}
          />
          <p>Percent <em>you</em> pay: {testSlider}&#37;</p>
        </label>
        <label htmlFor="specImgCoinsurance">
          Specialty Imaging Coinsurance:
          <input
            type="range"
            name="specImgCoinsurance"
            min="0"
            max="100"
            step="10"
            value={imgSlider}
            onChange={handleImgSliderChange}
          />
          <p>Percent <em>you</em> pay: {imgSlider}&#37;</p>
        </label>
        <label htmlFor="ucCoinsurance">
          Urgent Care Coinsurance:
          <input
            type="range"
            name="ucCoinsurance"
            min="0"
            max="100"
            step="10"
            value={urgSlider}
            onChange={handleUrgSliderChange}
          />
          <p>Percent <em>you</em> pay: {urgSlider}&#37;</p>
        </label>
        <label htmlFor="erCoinsurance">
          Emergency Room Coinsurance:
          <input
            type="range"
            name="erCoinsurance"
            min="0"
            max="100"
            step="10"
            value={erSlider}
            onChange={handleErSliderChange}
          />
          <p>Percent <em>you</em> pay: {erSlider}&#37;</p>
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Add more details</button>
      </form>
    </div>
  );
};
export default ExpandedInfo;
