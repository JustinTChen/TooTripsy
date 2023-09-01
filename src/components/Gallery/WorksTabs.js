import React, { useState } from 'react';

import PhotoGallery from './PhotoGallery';
import VideosTabs from './VideosTab';

const WorksTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
          style={{ fontFamily: "helvetica-w01-bold, helvetica-w02-bold, helvetica-lt-w10-bold, sans-serif" }}
        >
          VIDEOS
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          PHOTOS
        </button>
      </div>
      <div style={{ paddingBottom: "10%" }}>
        {activeTab === 1 && <div><VideosTabs /></div>}
        {activeTab === 2 && <div><PhotoGallery /></div>}
      </div>
    </div>
  );
};

export default WorksTabs;