import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorState } from './common/ErrorState';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error in MEDICARE App:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorState
          fullPage
          title="Application Encountered an Error"
          message={
            this.state.error?.message ||
            'Something went wrong while rendering this section. Our medical system support has been notified.'
          }
          onRetry={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
