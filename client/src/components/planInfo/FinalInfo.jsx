import React, { useState } from 'react';

const FinalInfo = ({
  finalPlanData, setFinalPlanData, sendAllData,
}) => {
  const [facilSlider, setFacilSlider] = useState(20);
  const [surgSlider, setSurgSlider] = useState(20);
  const [mentOutSlider, setMentOutSlider] = useState(20);
  const [pregOffSlider, setPregOffSlider] = useState(0);
  const [pregPhysSlider, setPregPhysSlider] = useState(20);
  const [pregFacilSlider, setPregFacilSlider] = useState(20);

  const handleFinishedClick = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    setFinalPlanData(Object.assign(finalPlanData, formData));
    sendAllData();
  };

  const handleFacilSliderChange = (e) => {
    setFacilSlider(e.target.value);
  };

  const handleSurgSliderChange = (e) => {
    setSurgSlider(e.target.value);
  };

  const handleMentOutSliderChange = (e) => {
    setMentOutSlider(e.target.value);
  };

  const handlePregOffSliderChange = (e) => {
    setPregOffSlider(e.target.value);
  };

  const handlePregPhysSliderChange = (e) => {
    setPregPhysSlider(e.target.value);
  };

  const handlePregFacilSliderChange = (e) => {
    setPregFacilSlider(e.target.value);
  };

  return (
    <div className="plan-info">
      <h4>Finalize Plan Information</h4>
      <form onSubmit={handleFinishedClick}>
        <label htmlFor="facilHospCoinsurance">
          Facility Fee <em>&#40;hospitalization&#41;</em> Coinsurance:
          <input
            type="range"
            name="facilHospCoinsurance"
            min="0"
            max="100"
            step="10"
            value={facilSlider}
            onChange={handleFacilSliderChange}
          />
          <p>Percent <em>you</em> pay: {facilSlider}&#37;</p>
        </label>
        <label htmlFor="physHospCoinsurance">
          Physician or Surgeon Fee <em>&#40;hospitalization&#41;</em> Coinsurance:
          <input
            type="range"
            name="physHospCoinsurance"
            min="0"
            max="100"
            step="10"
            value={surgSlider}
            onChange={handleSurgSliderChange}
          />
          <p>Percent <em>you</em> pay: {surgSlider}&#37;</p>
        </label>
        <label htmlFor="mentOutCoinsurance">
          Mental Health <em>&#40;outpatient&#41;</em> Coinsurance:
          <input
            type="range"
            name="mentOutCoinsurance"
            min="0"
            max="100"
            step="10"
            value={mentOutSlider}
            onChange={handleMentOutSliderChange}
          />
          <p>Percent <em>you</em> pay: {mentOutSlider}&#37;</p>
        </label>
        <label htmlFor="pregOffCoinsurance">
          Pregnancy <em>&#40;office visits&#41;</em> Coinsurance:
          <input
            type="range"
            name="pregOffCoinsurance"
            min="0"
            max="100"
            step="10"
            value={pregOffSlider}
            onChange={handlePregOffSliderChange}
          />
          <p>Percent <em>you</em> pay: {pregOffSlider}&#37;</p>
        </label>
        <label htmlFor="pregPhysCoinsurance">
          Pregnancy <em>&#40;delivery - physician&#41;</em> Coinsurance:
          <input
            type="range"
            name="pregPhysCoinsurance"
            min="0"
            max="100"
            step="10"
            value={pregPhysSlider}
            onChange={handlePregPhysSliderChange}
          />
          <p>Percent <em>you</em> pay: {pregPhysSlider}&#37;</p>
        </label>
        <label htmlFor="pregFacilCoinsurance">
          Pregnancy <em>&#40;delivery - facility&#41;</em> Coinsurance:
          <input
            type="range"
            name="pregFacilCoinsurance"
            min="0"
            max="100"
            step="10"
            value={pregFacilSlider}
            onChange={handlePregFacilSliderChange}
          />
          <p>Percent <em>you</em> pay: {pregFacilSlider}&#37;</p>
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Submit this plan</button>
      </form>
    </div>
  );
};
export default FinalInfo;
