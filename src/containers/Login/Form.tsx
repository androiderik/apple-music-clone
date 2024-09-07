import React, {useState} from 'react';

export const RegisterUser = ({ submit } : any) => {

    const [count, setCount] = useState(0);


    return (
        <div>
         {/* {   item.submit()} */}
            <p>You clicked {count} times</p>
            <button onClick={() => submit()} >Submit Form</button>
        </div>
    );

}