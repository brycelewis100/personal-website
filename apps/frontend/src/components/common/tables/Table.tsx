import classNames from 'classnames';

export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className="w-full">
            <table
                className={classNames(
                    'table-auto w-full bg-white border border-gray-200',
                    className,
                )}
            >
                {children}
            </table>
        </div>
    );
}
