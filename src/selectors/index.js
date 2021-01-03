import { createSelector } from 'reselect';

export const getAllProjects = createSelector(
  (s) => s.project.byId,
  (s) => s.project.allIds,
  (byId, allIds) => allIds.map((x) => byId[x]),
);

export const getAllCategories = createSelector(
  (s) => s.category.byId,
  (s) => s.category.allIds,
  (byId, allIds) => allIds.map((x) => byId[x]),
);
