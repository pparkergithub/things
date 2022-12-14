import { useResourceManagement } from "../resourceManagement"

export enum ResourceType {
    MANA = 'mana',
    LIFE = 'health'
}

export const standardManaValue = 5;
export const standardLifeValue = 10;

export const useStandardManaSystem = () => useResourceManagement({
    type: ResourceType.MANA,
    currentValue: standardManaValue,
    maxValue: standardManaValue
});

export const useStandardLifeSystem = () => useResourceManagement({
    type: ResourceType.LIFE,
    currentValue: standardLifeValue,
    maxValue: standardLifeValue
});