import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError');
        return { hasError: true, errorInfo: error };
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch');
        console.log('error ', error, 'info', info);
    }
    render() {
        if (this.state.hasError) {
            return <div className='error-boundary'>Something went wrong!!</div>;
        }
        return this.props.children;
    }
}
