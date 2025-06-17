import {createContext, PropsWithChildren, useContext} from "react";

interface TabContextType {
  tabActive: string;
}

const TabContext = createContext<TabContextType>({} as TabContextType);

interface TabContextProps extends PropsWithChildren{
  tabActive: string;
}

export const TabProvider = ({ children, tabActive }: TabContextProps) => {
  return (
      <TabContext.Provider value={{ tabActive }}>
        {children}
      </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabContext');
  }
  return context;
};


