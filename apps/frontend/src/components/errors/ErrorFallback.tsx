import { FallbackProps } from "react-error-boundary"
import { GenericError } from "./GenericError"
import { Button } from "../common/buttons/Button"

export function Errorfallback({
    error,
    resetErrorBoundary,
}: Omit<FallbackProps, "error"> & { error: unknown }) {
    return (
        <div className="flex w-full flex-col items-center p-4">
            <GenericError message="We've encountered a problem. Our engineers have been notified" />
            <Button onClick={resetErrorBoundary}>Try Again</Button>
        </div>
    )
}
