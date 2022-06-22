import { useState, useEffect } from 'react'

/**we create an interface called WindowDimension so that we can type in
what is returned by our Hook, which in this case is the browser's window object
dimensions. */
export interface WindowDimension {
    height: number;
    width: number
}

export const useWindowDimensions = (): WindowDimension => {
    const [dimension, setDimension] = useState<WindowDimension>({
        /**we create a state object called dimension and give it a value of 0 for height
and 0 for width. */
        height: 0,
        width: 0,
    });

    /**we create our handler function, handleResize, which will use the state
update method, setDimension, to set our dimension values. The window object
of our browser provides the dimension values. */
    const handleResize = () => {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth
        });
    };

/**we use the useEffect Hook to handle the window's
resize event. Note that an empty array, [], means that this will run only once
on first load. Also, note that when we add an event handler, we must also return
an event remover (this prevents memory leaks and redundant event handlers from
being added). */
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    return dimension;
}