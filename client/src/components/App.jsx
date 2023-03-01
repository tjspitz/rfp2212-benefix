import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plans from './Plans.jsx';
import Scenarios from './Scenarios.jsx';
import BasicInfo from './planInfo/BasicInfo.jsx';
import ExpandedInfo from './planInfo/ExpandedInfo.jsx';
import FinalInfo from './planInfo/FinalInfo.jsx';

const App = () => {
  const [allPlans, setAllPlans] = useState([]);
  // const [allScenarios, setAllScenarios] = useState([]);
  const [infoProgress, setInfoProgress] = useState(0);
  const [basicPlanData, setBasicPlanData] = useState({});
  const [expandedPlanData, setExpandedPlanData] = useState({});
  const [finalPlanData, setFinalPlanData] = useState({});

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get('/plans')
      .then((response) => {
        setAllPlans(response.data);
      })
      .catch((err) => err);

    setInfoProgress(0);
    setBasicPlanData({});
    setExpandedPlanData({});
    setFinalPlanData({});
  }, [submitted]);

  const sendAllData = () => {
    const allData = Object.assign(basicPlanData, expandedPlanData, finalPlanData);

    axios.post('/plans', { ...allData })
      .then(() => console.log('added plan!'))
      .catch((err) => err);

    setSubmitted(!submitted);
  };

  const updatePlan = (scenario) => {
    axios.put('/plans', { ...scenario })
      .then(() => console.log('updated plan: ', scenario.id))
      .catch((err) => err);
    setSubmitted(!submitted);
  };

  return (
    <div>
      <div className="welcome">
        <h3>Add a new plan</h3>
        {!infoProgress && (
          <BasicInfo
            basicPlanData={basicPlanData}
            setBasicPlanData={setBasicPlanData}
            infoProgress={infoProgress}
            setInfoProgress={setInfoProgress}
          />
        )}
        {infoProgress === 1 && (
          <ExpandedInfo
            expandedPlanData={expandedPlanData}
            setExpandedPlanData={setExpandedPlanData}
            infoProgress={infoProgress}
            setInfoProgress={setInfoProgress}
          />
        )}
        {infoProgress === 2 && (
          <FinalInfo
            finalPlanData={finalPlanData}
            setFinalPlanData={setFinalPlanData}
            infoProgress={infoProgress}
            setInfoProgress={setInfoProgress}
            sendAllData={sendAllData}
          />
        )}
      </div>
      <Plans allPlans={allPlans} updatePlan={updatePlan} />
      <Scenarios />
    </div>
  );
};
export default App;
