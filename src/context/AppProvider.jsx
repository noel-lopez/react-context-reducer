import React, {useReducer, useContext } from "react";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
  products: [],
  budget: 220
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{
      budget: state.budget,
      products: state.products,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  AppProvider,
  useAppContext
}