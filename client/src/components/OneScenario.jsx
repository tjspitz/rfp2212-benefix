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
      'had Primary Care': [pcVisits, pcVisitCost],
      'had Specialist Care': [scVisits, scVisitCost],
      'saw a Therapist': [mentVisits, mentVisitCost],
      'went to Urgent Care': [ucVisits, ucVisitCost],
      'went to the ER': [erVisits, erVisitCost],
      'went to the Hospital': [hospStays, hospStayCost],
      'had Surgery': [surgeries, surgeryCost],
      'Delivered a Child': [pregnancy, pregnancyCost],
      // diagCost,
      // specImgCost,
      // physFeeCost,
    };

    for (const event in costPairs) {
      const visitNum = costPairs[event][0];
      if (!visitNum) {
        delete costPairs[event];
      }
    }
    return costPairs;
  };

  const generateOverview = () => {
    const max = Object.keys(visitCostPairs).length;
    let counter = 0;
    let sentence = 'In this scenario, you ';
    let fragment;

    for (const event in visitCostPairs) {
      const visitNum = visitCostPairs[event][0];
      counter += 1;

      if (visitNum > 1) {
        fragment = `${event} ${visitNum} times, `;
        sentence += fragment;
      } else if (visitNum) {
        fragment = `${event} once, `;
        sentence += fragment;
      }
      if (counter === max) {
        if (counter > 1) {
          sentence = `${sentence.slice(0, -(fragment.length))} and ${fragment}`;
        }
        sentence = `${sentence.slice(0, sentence.length - 2)}.`;
      }
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
        {generateOverview()}
      </div>
      <table>
        <tbody>
          <tr className="table-header">
            <th>Deductible: {`Over / Under`}</th>
            <th>OOP Max: {`Reached / Under`}</th>
            <th>Annual Premium: {`$amount`}</th>
          </tr>
          <tr>
            <td className="whole-row centered" colSpan="3">
              &#8213; Contributing Costs &#8213;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OneScenario;
