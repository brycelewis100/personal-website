import classNames from 'classnames';

export function TableRow({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <tr className={classNames('border-b hover:bg-gray-50', className)}>{children}</tr>;
}
