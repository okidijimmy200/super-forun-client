import React from "react";

// props thw child is expected to receive
interface ChildProps  {
    className: string;
    children: React.ReactNode;
}

const Main: React.FC<ChildProps> = () => {
    // const test = true
    // if (test) throw new Error('Main Fail')
    // else {
    //     return <main className="content">Main</main>;
    // }
    return <main className="content">Main</main>;
    
};
export default Main;