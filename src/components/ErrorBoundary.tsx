import React from 'react'
import "./ErrorBoundary.css";

/**type for our Error Boundary's props */
interface ErrorBoundaryProps {
    children: React.ReactNode[];
}

/**type for our Error Boundary's local state */
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    info: object;
}

/**Error Boundaries still uses the older class style because we
need the getDerivedStateFromError and componentDidCatch life cycle
event handlers to catch errors. */
class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
    > {
        constructor(props: ErrorBoundaryProps) {
            super(props);
            this.state = {
                hasError: false,
                error: new Error(),
                info: { componentStack: "" },
            };
        }
/**we will use the getDerivedStateFromError
function to tell React to show the error UI if hasError is true. */
    static getDerivedStateFromError = (error: Error) => {
        return { hasError: true }
    }
    /**our componentDidCatch function that our component
realizes an error of some kind occurred and sets our hasError state variable to
true. */

    componentDidCatch(error: Error | null, info:object){
        console.log('error', error)
        this.setState({hasError: true, error,info})
    }
    render() {
        /**if hasError is true, we render our message so that users do not have to
see strange technical messages that can be confusing. */
        if (this.state.hasError) {
            return (
                <div className='error-container'>
                    <h2 style={{ padding: '2em' }}>
                    Something has gone wrong. Please reload your screen
                    </h2>
                </div>
            )
        }
        return this.props.children
    }
    }
    export default ErrorBoundary;