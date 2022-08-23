import React from 'react';
import { WrapperTabs, Tab } from './tabs.styled';

interface ITabsProps {
  activeTab: number;
  marginTop?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<{ title: string }>;
}

const Tabs = ({ tabs, activeTab, setActiveTab, marginTop }: ITabsProps) => {
  const setActiveTabHandler = (activeTab: number) => {
    setActiveTab(activeTab);
  };

  const tabsRender = () => {
    return (
      <>
        {tabs.map((tab, i) => {
          return (
            <Tab
              key={tab.title}
              onClick={() => setActiveTabHandler(i)}
              isActive={activeTab === i}
            >
              {tab.title}
            </Tab>
          );
        })}
      </>
    );
  };

  return <WrapperTabs marginTop={marginTop}>{tabsRender()}</WrapperTabs>;
};

export default Tabs;
