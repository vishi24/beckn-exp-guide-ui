import React, { useState } from "react";
import VideoTemplate from "../videoTemplate/videoTemplate";
import Modal from "../../welcome-page/modal";
import HeaderTab from "../headerTab/HeaderTab";
import Himalyas from "../product/Himalyas";
import { AppDataMocks } from "../../utility/appsDataMocks";

const ChooseExperienceHimalyas = () => {
  const [flag, setFlag] = useState(true);
  const APP_NAME = "himalayas";
  const tabs = [
    {
      key: "logo",
      label: (
        <div>
          <img
            style={{ height: "35px", width: "135px" }}
            src={"/assets/beckn_lg.svg"}
            alt={"Icon"}
            width={"98%"}
          />
        </div>
      ),
      content: "",
      disabled: true
    },
    {
      key: "2",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "2")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false
    },
    {
      key: "3",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "3")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: <Himalyas />,
      disabled: false
    },
    {
      key: "4",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "4")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false
    },
    {
      key: "5",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>
              {
                AppDataMocks.find(
                  (appData: any) => appData.appName === APP_NAME
                )?.tabs.find((tab: any) => tab.key === "5")?.tabHeaderText
              }
            </span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586515?h=f7735ffff9&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false
    },

    {
      key: "ForHomeIcon",
      label: (
        <div>
          <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
        </div>
      ),
      content: <Modal flag={flag} pathName={"/select-experience"} />,
      disabled: false
    }
  ];

  return (
    <div className="choosingExp_wrapper">
      <HeaderTab
        tabClassName="himalyas-tab"
        tabs={tabs}
        defaultActiveKey={"3"}
      />
    </div>
  );
};

export default ChooseExperienceHimalyas;
