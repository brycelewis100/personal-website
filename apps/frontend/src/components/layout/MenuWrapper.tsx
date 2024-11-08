import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { GlobalErrorBoundary } from '../errors/GlobalErrorBoundary';

export function MenuWrapper() {
    return (
        <div className="relative h-full">
            <Header />
            <GlobalErrorBoundary>
                <div className="h-full">
                    <Outlet />
                </div>
            </GlobalErrorBoundary>
        </div>
    );
}
