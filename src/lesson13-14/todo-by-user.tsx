import { FC } from 'react';
import styled, { css } from 'styled-components';
import { useHighlightRender } from '../lesson13-14/useHighlightRender';
import { useRequest } from '../shared/api';

const CubeData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 200px;
    min-height: 200px;
    border: 2px solid green;
`;

const ToDoContainer = styled.div<{ $completed: boolean }>(
    ({ $completed }) => css`
        display: flex;
        flex-wrap: wrap;
        min-height: 20px;
        padding: 10px;
        border-radius: 15px;
        background: ${$completed ? 'green' : 'gray'};
    `
);

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

interface IFetchTodoByUserId {
    userId: number;
}

interface ISettingsProps {
    signal?: AbortSignal;
}

const fetchTodoByUserId = (
    { userId }: IFetchTodoByUserId,
    { signal }: ISettingsProps
) => {
    return fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
        {
            signal,
        }
    ).then((response) => response.json());
};

const ToDoByUserId: FC<{ userId: number | null }> = ({ userId }) => {
    const cubeRef = useHighlightRender();

    const { isLoading, data, error } = useRequest<ITodo[]>(
        userId && fetchTodoByUserId,
        [{ userId }]
    );

    if (!userId) {
        return <CubeData ref={cubeRef}>Пользователь не выбран</CubeData>;
    }

    if (isLoading || !data) {
        return <CubeData ref={cubeRef}>Loading...</CubeData>;
    }

    if (error) {
        return <CubeData ref={cubeRef}>Error</CubeData>;
    }

    return (
        <CubeData ref={cubeRef}>
            {data.map(({ id, title, completed }) => (
                <ToDoContainer key={id} $completed={completed}>
                    {title}
                </ToDoContainer>
            ))}
        </CubeData>
    );
};

export { ToDoByUserId };
