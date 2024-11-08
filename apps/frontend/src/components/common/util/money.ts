export function formatMoney({
    amount,
    formatOpts = {},
}: {
    amount: number;
    formatOpts?: Intl.NumberFormatOptions;
}) {
    let v = amount;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        ...formatOpts,
    });
    return formatter.format(v);
}
