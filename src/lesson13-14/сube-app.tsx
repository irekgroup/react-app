import { FC, useState, useCallback } from 'react';
import '../../src/lesson13-14/сube-app';

import { useHighlightRender } from '../lesson13-14/useHighlightRender';
import { ToDoApp } from '../lesson13-14/todo';

const CubeApp: FC = () => {
    const ref = useHighlightRender();
    const [count, setCount] = useState<number>(1);

    const handleUpdateCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div className="three-page">
            <div ref={ref} className="control-panel">
                Count: {count}
                <button onClick={handleUpdateCount}>+1</button>
            </div>
            <div className="play-container">
                <ToDoApp />
            </div>
        </div>
    );
};

export { CubeApp };
