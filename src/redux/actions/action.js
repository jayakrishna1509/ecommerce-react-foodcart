// Search and filter actions
export const SET_SEARCH = (search) => ({
  type: "SET_SEARCH",
  payload: search,
});

export const SET_FILTER = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove iteams
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
