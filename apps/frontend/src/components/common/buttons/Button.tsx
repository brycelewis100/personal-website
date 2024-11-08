type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { children: React.ReactNode }

export function Button({ children }: ButtonProps) {
    return <button className="p-4 rounded-md">{children}</button>
}
