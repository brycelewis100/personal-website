import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { GlobalErrorBoundary } from '../errors/GlobalErrorBoundary';

export function MenuWrapper() {
    return (
        <div className="relative">
            <Header />
            <GlobalErrorBoundary>
                <Outlet />
            </GlobalErrorBoundary>
        </div>
    );
}
