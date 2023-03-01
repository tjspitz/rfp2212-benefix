import React from 'react';
import OnePlan from './OnePlan.jsx';

const Plans = ({ allPlans, updatePlan }) => (
  <div>
    <div className="plans container">
      <h3>Plans section</h3>
      {allPlans.map((plan) => (
        <OnePlan
          key={plan._id}
          planId={plan._id}
          planName={plan.planName}
          planType={plan.planType}
          coverageType={plan.coverageType}
          deductible={plan.deductible}
          oop={plan.oop}
          coinsurance={plan.coinsurance}
          premium={plan.premium}
          premFreq={plan.premFreq}
          pcCoinsurance={plan.pcCoinsurance}
          updatePlan={updatePlan}
        />
      ))}
    </div>
  </div>
);
export default Plans;
