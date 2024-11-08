import { Detail } from './route';

export function calculateDetailTotal(detail?: Detail): number {
    if (!detail) {
        return 0;
    }
    if (detail.period === 'monthly') {
        return detail.amount;
    }
    return detail.amount * 2.16;
}

export function calculateSectionTotal(details?: Detail[]): number {
    return (
        details?.reduce((total, detail) => total + calculateDetailTotal(detail) * 1, 0 as number) ||
        0
    );
}
