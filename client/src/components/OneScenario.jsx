/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';

const OneScenario = ({
  scenario, costData, planStats,
}) => {
  const [visitCostPairs, setVisitCostPairs] = useState({});
  // const [scenarioStats, setScenarioStats] = useState({});
  // const [costDataStats, setCostDataStats] = useState({});

  useEffect(() => {
    // setScenarioStats({ ...scenario });
    // setCostDataStats({ ...costData });
    setVisitCostPairs(pairSetter());
  }, []);

  const pairSetter = () => {
    const {
      pcVisitCost,
      scVisitCost,
      mentVisitCost,
      ucVisitCost,
      erVisitCost,
      hospStayCost,
      surgeryCost,
      pregnancyCost,
      // diagCost,
      // specImgCost,
      // physFeeCost,
    } = costData;

    const {
      pcVisits,
      scVisits,
      mentVisits,
      ucVisits,
      erVisits,
      hospStays,
      surgeries,
      pregnancy,
    } = scenario;

    const costPairs = {
      'had Primary Care': [pcVisits, pcVisitCost], // had
      'had Specialist Care': [scVisits, scVisitCost], // had
      'saw a Therapist': [mentVisits, mentVisitCost], // had
      'went to Urgent Care': [ucVisits, ucVisitCost], // went to
      'went to the ER': [erVisits, erVisitCost], // went to
      'went to the Hospital': [hospStays, hospStayCost], // went to
      'had Surgery': [surgeries, surgeryCost], // had
      'Delivered a Child': [pregnancy, pregnancyCost],
      // diagCost,
      // specImgCost,
      // physFeeCost,
    };
    return costPairs;
  };

  const generateOverview = () => {
    let counter = 1;
    let sentence = 'In this scenario, you ';
    for (const event in visitCostPairs) {
      const visitNum = visitCostPairs[event][0];
      if (visitNum > 2) {
        sentence += `${event} ${visitNum} times, `;
      } else if (visitNum) {
        sentence += `${event} once, `;
      }
      if (counter === 8) {
        sentence = `${sentence.slice(0, sentence.length - 2)}.`;
      }
      counter += 1;
    }

    return sentence;
  };

  // algorithm for multiplying costDatas against planStats
  // deductible is 2000
  // oop is 5000
  // coins is 20%
  // premium is 200, premFreq is 26

  // const sumCosts = () => {

  //   const {
  //     deductible,
  //     oop,
  //     coinsurance,
  //     premium,
  //     premFreq,
  //     pcCoinsurance,
  //   } = planStats;

  //   let sumPc, sumSc, sumMent, sumUc, sumEr, sumHosp, sumSurg, sumPreg;

  // add premium * premFreq to total
  // };
  return (
    <div className="one-scenario container">
      <div className="scenario-review">
        <p>
          {generateOverview()}
        </p>
      </div>
    </div>
  );
};
export default OneScenario;
