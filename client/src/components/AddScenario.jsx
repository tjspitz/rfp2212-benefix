import React, { useState } from 'react';

const AddScenario = ({
  id, visible, setVisible, updatePlan,
}) => {
  const [pcVisits, setPcVisits] = useState(0);
  const [scVisits, setScVisits] = useState(0);
  const [mentVisits, setMentVisits] = useState(0);
  const [ucVisits, setUcVisits] = useState(0);
  const [erVisits, setErVisits] = useState(0);
  const [hospStays, setHospStays] = useState(0);
  const [surgeries, setSurgeries] = useState(0);
  const [pregnancy, setPregnancy] = useState(0);

  const handleFinishedClick = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    updatePlan(id, formData);
  };

  const handlePcSliderChange = (e) => {
    setPcVisits(e.target.value);
  };

  const handleScSliderChange = (e) => {
    setScVisits(e.target.value);
  };

  const handleMentSliderChange = (e) => {
    setMentVisits(e.target.value);
  };

  const handleUcSliderChange = (e) => {
    setUcVisits(e.target.value);
  };

  const handleErSliderChange = (e) => {
    setErVisits(e.target.value);
  };

  const handleHospSliderChange = (e) => {
    setHospStays(e.target.value);
  };

  const handleSurgSliderChange = (e) => {
    setSurgeries(e.target.value);
  };

  const handlePregSliderChange = (e) => {
    setPregnancy(e.target.value);
  };

  return (
    <div className="add-scenario popup">
      {visible && (
        <form onSubmit={handleFinishedClick}>
          <label htmlFor="pcVisits">
            Primary Care Visits per Year: {pcVisits}
            <input
              type="range"
              name="pcVisits"
              min="0"
              max="20"
              step="1"
              value={pcVisits}
              onChange={handlePcSliderChange}
            />
          </label>
          <label htmlFor="scVisits">
            Specialist Care Visits per Year: {scVisits}
            <input
              type="range"
              name="scVisits"
              min="0"
              max="20"
              step="1"
              value={scVisits}
              onChange={handleScSliderChange}
            />
          </label>
          <label htmlFor="mentVisits">
            Mental Health Visits per Year: {mentVisits}
            <input
              type="range"
              name="mentVisits"
              min="0"
              max="20"
              step="1"
              value={mentVisits}
              onChange={handleMentSliderChange}
            />
          </label>
          <label htmlFor="ucVisits">
            Urgent Care Visits per Year: {ucVisits}
            <input
              type="range"
              name="ucVisits"
              min="0"
              max="20"
              step="1"
              value={ucVisits}
              onChange={handleUcSliderChange}
            />
          </label>
          <label htmlFor="erVisits">
            ER Visits per Year: {erVisits}
            <input
              type="range"
              name="erVisits"
              min="0"
              max="10"
              step="1"
              value={erVisits}
              onChange={handleErSliderChange}
            />
          </label>
          <label htmlFor="hospStays">
            Hospital Stays &#40;in days&#41; per Year: {hospStays}
            <input
              type="range"
              name="hospStays"
              min="0"
              max="10"
              step="1"
              value={hospStays}
              onChange={handleHospSliderChange}
            />
          </label>
          <label htmlFor="surgeries">
            Surgeries per Year: {surgeries}
            <input
              type="range"
              name="surgeries"
              min="0"
              max="3"
              step="1"
              value={surgeries}
              onChange={handleSurgSliderChange}
            />
          </label>
          <label htmlFor="pregnancy">
            Do you plan on being pregnant this year?
            <input
              type="range"
              name="pregnancy"
              min="0"
              max="1"
              step="1"
              value={pregnancy}
              onChange={handlePregSliderChange}
            />
            {!pregnancy && <p>No</p>}
            {pregnancy && <p>Yes</p>}
          </label>
          <button type="reset">Reset</button>
          <button type="submit">Submit this plan</button>
        </form>
      )}
    </div>
  );
};
export default AddScenario;
