export interface Ability {
    name?: string;
    cost?: ResourceCost;
    cooldown?: number;
}

export enum ResourceType {
    MANA,
    HEALTH
}

export interface ResourceCost {
    type: ResourceType;
    value?: number;
}

export interface ResourceManagement {
    type: ResourceType;
    currentValue: number;
    maxValue: number;
}

export const useResourceManagement = (type: ResourceType, currentValue: number, maxValue: number) => {
    const _currentValue = ref(currentValue);
    const _maxValue = ref(maxValue);

    const useResource(amountUsed: number) => {
        _currentValue.value = Math.max(0, _currentValue.value - amountUsed);
    }

    const restoreResource(amountRestored: number) => {
        _currentValue.value = Math.min(_maxValue.value, _currentValue.value + amountRestored);
    }
}