import React from 'react';

class CustomErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // will be called when an error is thrown
        // from the wrapped component and descendants
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo){
        // logging service proxy
        console.log(error.message);
    }

    render () {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;