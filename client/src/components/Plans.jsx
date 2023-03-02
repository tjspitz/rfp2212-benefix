/* eslint-disable no-underscore-dangle */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../dist/styles.css';
import OnePlan from './OnePlan.jsx';

const Plans = ({ allPlans, updatePlan }) => {
  const costData = {
    pcVisitCost: 300,
    scVisitCost: 600,
    mentVisitCost: 250,
    ucVisitCost: 500,
    erVisitCost: 2000,
    hospStayCost: 3000,
    surgeryCost: 3000,
    pregnancyCost: 6000,
    // diagCost: 400,
    // specImgCost: 2000,
    // physFeeCost: 500,
  };

  return (
    <div>
      <div className="plans container">
        <div className="section-title">My Plans</div>
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {allPlans.map((plan) => (
            <SwiperSlide>
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
                /* { sc, diag, specImg, facil, etc. } */
                updatePlan={updatePlan}
                scenarios={plan.scenarios}
                costData={costData}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Plans;
