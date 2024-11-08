import classNames from 'classnames';

export function TableCell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <td className={classNames('px-4 py-2', className)}>{children}</td>;
}
