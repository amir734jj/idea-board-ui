import { createSelector } from 'reselect';

export const getAllProjects = (state) => createSelector((s) => s.project.byId,
  state.project.allIds,
  (byId, allIds) => allIds.map((x) => byId[x]));
