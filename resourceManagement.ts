export enum ResourceType {
    MANA,
    HEALTH
}

export interface ResourceCost {
    type: ResourceType;
    value?: number;
}

export interface UseResourceManagement {
    type: ResourceType;
    currentValue: Ref<number>;
    maxValue: Ref<number>;
    useResource(amountUsed: number): void;
    replenishResource(amountReplenished: number): void;
}

export const useResourceManagement = (type: ResourceType, currentValue: number, maxValue: number): UseResourceManagement => {
    const _currentValue = ref(currentValue);
    const _maxValue = ref(maxValue);

    const useResource = (amountUsed: number) => {
        _currentValue.value = Math.max(0, _currentValue.value - amountUsed);
    }

    const replenishResource = (amountReplenished: number) => {
        _currentValue.value = Math.min(_maxValue.value, _currentValue.value + amountReplenished);
    }

    return {
        type,
        _currentValue,
        _maxValue,
        useResource,
        replenishResource
    }
}