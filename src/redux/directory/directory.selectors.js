import { createSelector } from "reselect";

const selectDirectory = state => state.directory

const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.collections
)

export default selectDirectorySections