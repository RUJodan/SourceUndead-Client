import React from 'react';
import MenuSideBar from './MenuSidebar';

const Index = () => (
  <div className="wrapper">
    <MenuSideBar />
    <div className="content">
      <fieldset>
        <legend>General Statistics</legend>
      </fieldset>

      <fieldset>
        <legend>Stats as Human</legend>
      </fieldset>

      <fieldset>
        <legend>Stats as Zombie</legend>
      </fieldset>
    </div>
  </div>
);

export default Index;
