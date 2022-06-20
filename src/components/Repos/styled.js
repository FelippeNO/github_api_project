import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const ContainerTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const ContainerTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
ContainerTabList.tabsRole = "TabList";

export const ContainerTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: #fff;
  margin: 8px;
  &:focus {
    outline: none;
  }
  &.isSelected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
ContainerTab.tabsRole = "Tab";

export const ContainerTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid #ccc;
  display: none;
  margin-top: -5px;
  &.isSelected {
    display: block;
  }
`;
ContainerTabPanel.tabsRole = "TabPanel";

export const ContainerList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;