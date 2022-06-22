import React from "react";
import { useWindowDimensions } from '../../hooks/WindowDimensions'
import SideBarMenus from './SideBarMenus'

// props thw child is expected to receive
interface ChildProps  {
    className: string;
    children: React.ReactNode;
}

const SideBar: React.FC<ChildProps> = () => {
    /**As you can see, we use the useWindowDimensions Hook to get the width
dimension. We then check if it is 768 or lower and if it is, we return null;
otherwise, we return the normal JSX. */
    const { width } = useWindowDimensions();
    if (width <= 768) {
        return null;
    }
    return <div className="sidebar">
        <SideBarMenus />
    </div>;
};
export default SideBar;