import classNames from 'classnames';

export function TableHeaderCell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <th className={classNames('px-4 py-2 text-left text-gray-600 font-medium', className)}>
            {children}
        </th>
    );
}
