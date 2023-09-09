import React from "react";
import { BiHistory } from "react-icons/bi";
import '.components/History.css';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('historyvid')) || [{ "id": "history", "msg": "No history Data Found" }];
    const uniqueArray = [];
    for (const item of savedHistory) {
      if (!isDuplicate(uniqueArray, item)) {
        uniqueArray.push(item);
      }
      function isDuplicate(array, item) {
        const uniqueProperty = item.id; // Change 'id' to the unique property of your objects

        return array.some(existingItem => existingItem.id === uniqueProperty);
      }

    }
    setHistoryList(uniqueArray);
    console.log(uniqueArray)
  }, []);

  return (
    <div className="history">
      <h4><BiHistory className="fs-3 mx-2" />History</h4>
      {historyList.map((videos) => (
        <div className="">
          {videos.id === "history" ? <h3>{videos.msg}</h3> :
            <Link className="links" to={`/video/${videos.id}`} key={videos.id}>


              <div className="video-style ">

                <img className="his-thumbnail" src={videos.thumbnailSrc} alt="" />

                <div className="video-content ">

                  <div className="video-info">
                    <p className="video-title_1 mb-3">{videos.title}</p>
                  </div>
                  <div className="channel-content mb-3">
                    <img
                      className="video-thumbnail"
                      src={videos.channelIconSrc}
                      alt=""
                      style={{ width: 35, height: 35 }}
                    />
                    <p className="video-channel-name my-auto">{videos.channelName}</p>

                  </div>
                  <p className="video-views mb-1">{videos.subscribers} subscribers</p>
                </div>
              </div>
            </Link>
          }
        </div>


      ))
      }
    </div >
  );
};

export default History;
