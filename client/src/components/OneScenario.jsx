/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';

const OneScenario = ({
  scenario, costData, planStats,
}) => {
  const [visitCostPairs, setVisitCostPairs] = useState({});
  const [costReport, setCostReport] = useState([]);

  useEffect(() => {
    setVisitCostPairs(pairSetter());
  }, []);

  const sumCosts = (pairs) => {
    const {
      deductible,
      oop,
      coinsurance,
      premium,
      premFreq,
    } = planStats;

    let total = 0;
    let excess = 0;
    let plusPrem = premium * premFreq;
    let dedMet = false;
    let oopMet = false;
    const coinsPercent = coinsurance / 100;
    let dedLimit;
    let oopLimit;
    let dedRemainder;
    let oopRemainder;

    for (const event in pairs) {
      let multiplier = pairs[event][0];
      const visitCost = pairs[event][1];
      const visitCoinsCost = visitCost * coinsPercent;

      while (multiplier > 0) {
        dedLimit = deductible - total;
        oopLimit = oop - total;
        dedRemainder = visitCost - dedLimit;
        oopRemainder = visitCost - oopLimit;

        if (oopMet) {
          excess += visitCost;
        } else {
          if (!dedMet) {
            if (total + visitCost > deductible) {
              dedMet = true;
              total += dedLimit;
              total += dedRemainder * coinsPercent;
            } else {
              total += visitCost;
            }
          } else {
            if (total + visitCoinsCost > oop) {
              oopMet = true;
              total += oopLimit;
              excess += oopRemainder;
            } else {
              total += visitCoinsCost;
            }
          }
        }
        multiplier -= 1;
      }
    }
    plusPrem += total;
    return [total, plusPrem, excess];
    // setCostReport(costReport.concat([total, plusPrem, excess]));
  };

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
    // TECH DEBT OMG SIDE EFFECTS
    setCostReport(sumCosts(costPairs));
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

  return (
    <div className="one-scenario container">
      <div className="scenario-review">
        {generateOverview()}
      </div>
      <ul className="scenario-breakdown">
        <li>
          You&#160;{
            costReport[0] >= planStats.deductible
              ? 'reached'
              : 'didn\'t reach'
          }&#160;your deductible of &#36;{planStats.deductible}
        </li>
        <li>
          You&#160;{
            costReport[0] >= planStats.oop
              ? 'reached'
              : 'didn\'t reach'
          }&#160;
          your out-of-pocket maxiumum of &#36;{planStats.oop}.
        </li>
        <li>
          The cost of your premium for one full year is &#36;
          {(planStats.premium * planStats.premFreq).toFixed(2)}.
        </li>
        <li>
          Based upon this scenario, you would pay
          &#36;{costReport[0]}
          &#160;in medical bills under this plan in one year.
        </li>
        <li>
          Accounting for your medical bills and your premiums,
          you would pay
          &#36;{costReport[1]}
          &#160;this year.
        </li>
        {costReport[2] ? (
          <li>
            However, this plan potentially saved you
            &#36;{costReport[2]}
            due to the conditions of this scenario.
          </li>
        ) : null}
      </ul>
    </div>
  );
};
export default OneScenario;
