import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileQuestion className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The page or reprographics document link you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">
            <Home className="w-4 h-4 mr-1.5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

