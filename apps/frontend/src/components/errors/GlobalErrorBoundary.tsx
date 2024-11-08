import { ErrorBoundary } from "react-error-boundary"
import { useLocation } from "react-router-dom"
import { Errorfallback } from "./ErrorFallback"

type GlobalErrorBoundaryProps = {
    children: React.ReactNode
}

export function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
    const location = useLocation()

    return (
        <ErrorBoundary
            resetKeys={[window.location.pathname, location.pathname]}
            FallbackComponent={Errorfallback}>
            {children}
        </ErrorBoundary>
    )
}
