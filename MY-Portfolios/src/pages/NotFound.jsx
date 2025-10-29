import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import PageLayout from '../components/PageLayout';

const NotFound = () => {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-2xl font-semibold text-slate-300 mb-2">Page Not Found</p>
          <p className="text-slate-400 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
            <Link to="/">
              ← Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
