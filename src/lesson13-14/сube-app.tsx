import { FC, useEffect, useRef, useState, memo, useCallback }from 'react';
import '../../src/lesson13-14/сube-app'

import Button from '../shared/components/Button'
import { useHighlightRender } from '../lesson13-14/useHighlightRender'
import { ToDoApp } from '../lesson13-14/todo'

const Cube = memo<{ onAddCube: VoidFunction }>(({onAddCube}) => {
    const ref = useRef<HTMLDivElement>(null)



    useEffect(() => {

        ref.current?.classList.add('cube-update')
        setTimeout(()=> {
            ref.current?.classList.remove('cube-update')
        }, 200)
    })

    return <div ref={ref} className="cube">
        <Button onClick={onAddCube}>+1</Button>
    </div>
})

const CubeApp:FC = () => {
    const ref = useHighlightRender();
    const [count, setCount] = useState<number>(1)

    const handleUpdateCount = useCallback(() => {
      setCount( (prevCount) => prevCount+1)
    },[])

    return (
    <div className="three-page">
        <div ref= {ref} className="control-panel">
            Count: {count}
            <button onClick={handleUpdateCount}>+1</button>
        </div>
        <div className="play-container">
           {/*  {new Array(count).fill('').map((_, index) => <Cube onAddCube={handleUpdateCount} key={index}></Cube>)}*/}
            <ToDoApp/>
        </div>
    </div>
)}

export { CubeApp }

