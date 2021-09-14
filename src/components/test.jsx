import React, { useState } from 'react';

const Test = ({setItem,items}) => {

    const [item1,setItem1] = useState({
        
        '1':{
            id:1,
            name:"이선호",
            age: 29,
        },
        '2':{
            id:2,
            name:"김주영",
            age: 29,
        }
        
    });
    

    const cartIn = (e) => {
        
    }
    const cartOut = () => {

    }
    return (
        <div>
            {
                Object.keys(item1).map(item => (
                    <div>dddd</div>
                ))
            }
            {/* {
            item1.map((item,idx) => (
                <div>
                <div>{item.itemName}</div>
                <div>{item.state}</div>

                {
                item.state == false
                ? <button key={item.key} onClick={cartIn}>담기</button>
                : <button key={item.key} onClick={cartOut}>빼기</button>
                }
                </div>  
            ))
            } */}
            <h1>1234</h1>
        </div>
    )
};

export default Test;