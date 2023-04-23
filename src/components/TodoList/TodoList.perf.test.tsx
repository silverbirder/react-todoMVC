import {render} from "@testing-library/react";
import {TodoList} from ".";
import {Todo} from "../../types";
import {Profiler} from "react";

describe("TodoList", () => {
    it("renders with acceptable performance", () => {
        // Arrange
        const onRender = jest.fn();
        const todos: Todo[] = [...Array(100)].map((value, index) => {
            return {
                id: index.toString(),
                title: "title",
                completed: false,
            };
        });

        // Act
        render(
            <Profiler id="PerformanceTestComponent" onRender={onRender}>
                <TodoList todos={todos}/>
            </Profiler>
        );

        // Assert
        const [, , actualDuration, , , , ,] = onRender.mock.calls[0];
        expect(actualDuration).toBeLessThan(500);
    });
});
