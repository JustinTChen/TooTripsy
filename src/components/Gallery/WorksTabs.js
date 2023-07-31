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
        >
          Videos
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Photos
        </button>
      </div>
      <div>
        {activeTab === 1 && <div><VideosTabs /></div>}
        {activeTab === 2 && <div><PhotoGallery /></div>}
      </div>
    </div>
  );
};

export default WorksTabs;