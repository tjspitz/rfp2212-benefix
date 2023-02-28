/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const BasicInfo = ({
  basicPlanData, setBasicPlanData, setInfoProgress,
}) => {
  const [coinsSlider, setCoinsSlider] = useState(20);

  const handleContinueClick = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    setBasicPlanData(Object.assign(basicPlanData, formData));
    setInfoProgress(1);
  };

  const handleCoinsSliderChange = (e) => {
    setCoinsSlider(e.target.value);
  };

  return (
    <div className="plan-info">
      <h4>Basic Plan Information</h4>
      <form onSubmit={handleContinueClick}>
        <label htmlFor="planName">
          Plan Name &#40;e.g. &#34;Constant Care Silver 7 150&#34;&#41;:
          <input type="text" name="planName" required />
        </label>
        <hr />
        <label htmlFor="planType">
          Plan Type:
          <select name="planType" defaultValue="na" required>
            <option disabled value="na">Choose an option</option>
            <option value="epo">EPO</option>
            <option value="ppo">PPO</option>
            <option value="hmo">HMO</option>
            <option value="hdhp">HDHP</option>
          </select>
        </label>
        <hr />
        <label htmlFor="coverageType">
          Coverage:
          <select name="coverageType" defaultValue="na" required>
            <option disabled value="na">Choose an option</option>
            <option value="">Single</option>
            <option value="1">Family</option>
          </select>
        </label>
        <hr />
        <label htmlFor="deductible">
          Deductible:
          <input
            type="text"
            name="deductible"
            placeholder="enter digits only"
            required
          />
        </label>
        <hr />
        <label htmlFor="oop">
          Out-of-pocket Maximum &#40;OOP&#41;:
          <input
            type="text"
            name="oop"
            placeholder="enter digits only"
            required
          />
        </label>
        <hr />
        <label htmlFor="coinsurance">
          Coinsurance:
          <input
            type="range"
            name="coinsurance"
            min="0"
            max="100"
            step="10"
            value={coinsSlider}
            onChange={handleCoinsSliderChange}
          />
          <p>Percent <em>you</em> pay: {coinsSlider}&#37;</p>
        </label>
        <hr />
        <label htmlFor="premium">
          Premium you pay:
          $<input
            type="text"
            name="premium"
            placeholder="enter digits only"
            required
          />
        </label>
        <hr />
        <label htmlFor="premiumFreq">
          Premium frequency:
          <select name="premiumFreq" defaultValue="na" required>
            <option disabled value="na">Choose an option</option>
            <option value="52">Weekly</option>
            <option value="26">Bi-weekly</option>
            <option value="24">Bi-Monthly</option>
            <option value="12">Monthly</option>
          </select>
        </label>
        <hr />
        <button type="reset">Reset</button>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};
export default BasicInfo;
