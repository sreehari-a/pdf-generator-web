import React, { useState } from "react";
import { TabButton, TabContainer, TabContent, TabList } from "./styled";

interface Tab {
  label: string;
  content: JSX.Element;
  onSelectTab?: (index: number) => void;
}

export interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => {
          const onClickTab = (index: number) => {
            setSelectedTab(index);
            tab.onSelectTab?.(index);
          };
          return (
            <TabButton
              key={index}
              className={selectedTab === index ? "selected" : ""}
              selected={selectedTab === index}
              onClick={() => onClickTab(index)}
            >
              {tab.label}
            </TabButton>
          );
        })}
      </TabList>
      {tabs.map((tab, index) => (
        <TabContent key={index} selected={selectedTab === index}>
          {tab.content}
        </TabContent>
      ))}
    </TabContainer>
  );
};

export default Tabs;
