import { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

const ProgressionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => handleTabClick(0)}>Tab 1</Tab>
        <Tab onClick={() => handleTabClick(1)}>Tab 2</Tab>
        <Tab onClick={() => handleTabClick(2)}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>{activeTab === 0 ? "Content for Tab 1" : null}</TabPanel>
        <TabPanel>{activeTab === 1 ? "Content for Tab 2" : null}</TabPanel>
        <TabPanel>{activeTab === 2 ? "Content for Tab 3" : null}</TabPanel>
      </TabPanels>
</Tabs>
  );
};

export default ProgressionTabs;