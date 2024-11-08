export function PageSection({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between w-full">
            <div className="w-full">{children}</div>
        </div>
    );
}
