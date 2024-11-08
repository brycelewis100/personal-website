import classNames from 'classnames';

export function TableHead({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <thead className={classNames('bg-gray-100 border-b', className)}>
            <tr>{children}</tr>
        </thead>
    );
}
