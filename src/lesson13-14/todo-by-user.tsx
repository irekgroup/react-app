import { useState, useEffect, FC} from 'react';
import styled, {css} from 'styled-components';

import { useHighlightRender } from '../lesson13-14/useHighlightRender'

const CubeData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 200px;
    min-height: 200px;
    border: 2px solid green;
`

const ToDoContainer = styled.div<{$completed: boolean}>(({$completed}) => css`
    display: flex;
    flex-wrap: wrap;
    min-height: 20px;
    padding: 10px;
    border-radius: 15px;
    background: ${$completed? 'green': 'gray' };
`)

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

const ToDoByUserId:FC<{ userId:number | null }> = ({userId}) => {

    const cubeRef = useHighlightRender()

    const [data, setData] = useState<null | ITodo[]>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {

        if (!userId) {
            return
        }

        setLoading(true);
        let controller = new AbortController();
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, {signal: controller.signal})
            .then(response => response.json())
            .then(data => {
                if (!controller.signal.aborted) {
                    setData(data);
                }
            })
            .catch(error => {
                if (!controller.signal.aborted) {
                    setError(error)
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            });
            return () => {
                controller.abort()
            }
    }, [userId]);

    if (!userId) {
        return <CubeData ref={cubeRef}>Пользователь не выбран</CubeData>
    }

    if (isLoading || !data) {
        return <CubeData ref={cubeRef}>Loading...</CubeData>
    }

    if (error) {
        return <CubeData ref={cubeRef}>Error</CubeData>
    }

    return (
        <CubeData ref={cubeRef}>
            {data.map(({ id, title, completed }) => <ToDoContainer key={id} $completed={completed} >
            {title}
            </ToDoContainer>)}
        </CubeData>)
}

export { ToDoByUserId }