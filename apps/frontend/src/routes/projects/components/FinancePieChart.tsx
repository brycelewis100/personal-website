import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export function FinancePieChart({
    guiltFree,
    fixed,
    invest,
    savings,
}: {
    guiltFree: number;
    fixed: number;
    invest: number;
    savings: number;
}) {
    const chartData = [
        { name: 'guilt free', value: guiltFree, color: 'green' },
        { name: 'fixed', value: fixed, color: '#ea2d2d' },
        { name: 'savings', value: savings, color: '#0ba928' },
        { name: 'invest', value: invest, color: '#2daeea' },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 80, bottom: 80 }}>
                <Pie
                    {...pieProps}
                    data={chartData}
                    dataKey="value"
                    // label={renderCustomizedLabel}
                    paddingAngle={5}
                    label={(a) => {
                        return a.tooltipPayload?.[0]?.name;
                    }}
                    // startAngle={180}
                    // endAngle={0}
                >
                    {chartData.map((entry, idx) => {
                        return (
                            <Cell
                                className="cursor-pointer"
                                fill={entry.color}
                                stroke="rgba(0,0,0,0)"
                            />
                        );
                    })}
                </Pie>

                <Tooltip
                    reverseDirection={{ x: true, y: true }}
                    allowEscapeViewBox={{ x: true, y: true }}
                    offset={-5}
                    content={(props) => <CyclePieTooltip {...props} dataLabel="name" />}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export const pieProps = {
    innerRadius: '80%',
    outerRadius: '100%',
    paddingAngle: 0,
    isAnimationActive: false,
};

export const CyclePieTooltip = ({
    active,
    payload,
    formatValue = (v: number) => `${v}`,
    /**
     *   if the label value used for the data is not "label" specify the key corresponding to the label as "dataLabel"
     */
    dataLabel = 'label',
    dataValue = 'value',
}: {
    formatValue?: (v: number) => string;
    dataLabel?: string;
    dataValue?: string;
    [key: string]: unknown;
}) => {
    if (active && payload && Array.isArray(payload) && payload.length) {
        const data = payload[0].payload.payload;

        return (
            <div className="whitespace-nowrap rounded-md border bg-white p-2 text-xs ">
                <div className="flex items-center gap-2 text-xs">
                    {data[dataLabel]} [{formatValue(data?.[dataValue] as number)}]
                </div>
            </div>
        );
    }
    return null;
};
