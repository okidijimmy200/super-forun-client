import React, { useState, useEffect} from "react";
import { useWindowDimensions } from '../hooks/WindowDimensions'
import { getCategories } from '../services/DataService'
import Category from '../models/Category'
import './LeftMenu.css'

// props thw child is expected to receive
interface ChildProps  {
    className: string;
    children: React.ReactNode;
}

const LeftMain: React.FC<ChildProps> = () => {
    const { width } = useWindowDimensions();
    const [categories, setCategories] = useState<JSX.Element>(
        <div>Left Menu</div>
    );

    // make a call to our getCategories function and get our Categories.
    useEffect(() => {
        getCategories()
            .then((categories: Array<Category>) => {
                const cats = categories.map((cat) => {
                    return <li key={cat.id}>{cat.name}</li>
                });
                setCategories(<ul className="='category">{cats}</ul>)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    if (width <= 768) {
        return null;
    }
    return <main className="leftmenu">{categories}</main>;
};
export default LeftMain;