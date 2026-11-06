import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log to an error reporting service in production
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary p-8 text-center">
          <div className="w-16 h-16 mb-6 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
            <span className="text-3xl">⚠️</span>
          </div>
          <h1 className="text-2xl font-black mb-3">حدث خطأ غير متوقع</h1>
          <p className="text-text-secondary text-sm mb-6 max-w-md">
            نعتذر عن هذا الخطأ. يرجى تحديث الصفحة أو التواصل معنا إذا استمرت المشكلة.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-accent-start text-white font-bold text-sm hover:bg-accent-end transition-all cursor-pointer"
          >
            تحديث الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
