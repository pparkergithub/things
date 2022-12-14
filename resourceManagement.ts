import { Ref, ref } from "vue";

export interface ResourceCost {
    type?: string;
    value?: number;
}

export interface UseResourceManagement {
    type: Ref<string>;
    currentValue: Ref<number>;
    maxValue: Ref<number>;
    useResource(amountUsed: number): void;
    replenishResource(amountReplenished: number): void;
}

export interface UseResourceManagementParams {
    type: string;
    currentValue: number;
    maxValue: number;
}

export const useResourceManagement = (params: UseResourceManagementParams): UseResourceManagement => {
    const _type = ref(params.type);
    const _currentValue = ref(params.currentValue);
    const _maxValue = ref(params.maxValue);

    const useResource = (amountUsed: number) => {
        _currentValue.value = Math.max(0, _currentValue.value - amountUsed);
    }

    const replenishResource = (amountReplenished: number) => {
        _currentValue.value = Math.min(_maxValue.value, _currentValue.value + amountReplenished);
    }

    return {
        type: _type,
        currentValue: _currentValue,
        maxValue: _maxValue,
        useResource,
        replenishResource
    }
}