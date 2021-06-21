import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)   //useState를 사용할 때 Generics를 사용하여 해당 상태가 어떤 타입을 가지고 있을 지 설정해주면 된다.
                                                    //사실상 useState<타입>을 설정해주지 않아도 무방하다. 
                                                    //상태값이 null일수도 있고, 아닐수도 있을 경우 Generics를 활용하면 좋다. 
    const Increase = () => setCount(count +1)
    const Decrease = () => setCount(count -1)
    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={Increase}>+1</button>
                <button onClick={Decrease}>+1</button>
            </div>
        </div>
    )

}


export default Counter