export function GenericError({
    message = "An Error Occured",
}: {
    message?: string
}) {
    return <div>{message}</div>
}
