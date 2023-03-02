/* eslint-disable no-underscore-dangle */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../dist/styles.css';
import OneScenario from './OneScenario.jsx';
import AddScenario from './AddScenario.jsx';

const OnePlan = ({
  planId, planName, planType, coverageType,
  deductible, oop, coinsurance, premium,
  premFreq, pcCoinsurance, updatePlan, scenarios, costData,
}) => {
  const [visible, setVisible] = useState(false);

  const planStats = {
    deductible,
    oop,
    coinsurance,
    premium,
    premFreq,
    pcCoinsurance,
  };

  return (
    <div className="one-plan container">
      <table className="one-plan info">
        <tbody>
          <tr className="table-header">
            <th>Plan Name: {planName}</th>
            <th>Plan Type: {planType}</th>
            <th>Coverage Type: {coverageType}</th>
          </tr>
          <tr>
            <td>Deductible: &#36;{deductible}</td>
            <td>OOP: &#36;{oop}</td>
            <td>Coinsurance: {coinsurance}&#37;</td>
          </tr>
          <tr>
            <td className="whole-row" colSpan="3">
              Premium: &#36;{
                `${premium} every ${(52 / premFreq).toFixed(2)} weeks`
              }
            </td>
          </tr>
          <tr>
            <td className="whole-row" colSpan="3">
              Preventitive Care is {
                pcCoinsurance ? `${pcCoinsurance}%` : 'free'
              }
            </td>
          </tr>
        </tbody>
      </table>
      <Swiper
        className="mySwiper2 swiper-v"
        direction="vertical"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {scenarios.map((scenario) => (
          <SwiperSlide>
            <OneScenario
              key={scenario._id}
              scenario={scenario}
              planStats={planStats}
              costData={costData}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="add-scenario btn"
        type="button"
        onClick={() => setVisible(!visible)}
      >
        Add New Scenario
      </button>
      <AddScenario
        id={planId}
        visible={visible}
        setVisible={setVisible}
        updatePlan={updatePlan}
      />
    </div>
  );
};
export default OnePlan;
