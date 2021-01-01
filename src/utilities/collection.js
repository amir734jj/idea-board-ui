export const pushById = (byId, items, idSelector) => {
  const result = { ...byId };
  (Array.isArray(items) ? items : [items]).forEach((x) => {
    const id = idSelector(x);
    result[id] = x;
  });
  return result;
};

export const byId = (collection, idSelector) => collection.reduce((acc, x) => {
  acc[idSelector(x)] = x;
  return acc;
}, {});

export const pushIfNotExists = (array, item) => {
  const result = array.slice();
  let isChanged = false;
  const items = Array.isArray(item) ? item : [item];
  items.forEach((id) => {
    if (!array.includes(id)) {
      result.push(id);
      isChanged = true;
    }
  });
  // For Redux, unchanged state should be the same instance. State should never be mutated
  return isChanged ? result : array;
};
