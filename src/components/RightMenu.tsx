import React from "react";
import { useWindowDimensions } from '../hooks/WindowDimensions'


// props thw child is expected to receive
interface ChildProps  {
    className: string;
    children: React.ReactNode;
}
const RightMenu: React.FC<ChildProps> = () => {
    const { width } = useWindowDimensions();
    if (width <= 768) {
        return null;
    }
    return <main className="rightmenu">Right Menu</main>;
};
export default RightMenu;