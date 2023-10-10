import { describe, expect, it } from "vitest";
import filterReducer, { filterTask, searchTask } from "./filterSlice";
import { TASK_STATE_ALL, TASK_STATE_COMPLETE } from "@helpers/constants";

describe("filterSlice", () => {
    it("updates the task state filter", () => {
        const initialState = { search: "", state: TASK_STATE_ALL };
        const { state } = filterReducer(initialState, filterTask(TASK_STATE_COMPLETE));

        expect(state).toBe(TASK_STATE_COMPLETE);
    });

    it("updates the search filter", () => {
        const initialState = { search: "", state: TASK_STATE_ALL };
        const query = "example";
        const { search } = filterReducer(initialState, searchTask(query));

        expect(search).toBe(query);
    });
});
