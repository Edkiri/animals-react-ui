import { createContext, useState } from 'react';

const AppContext = createContext({});

export function AppProvider({ children }) {
  const [isCreating, setIsCreating] = useState(false);

  const toggleCreating = () => setIsCreating(!isCreating);

  return (
    <AppContext.Provider value={{ isCreating, toggleCreating }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
