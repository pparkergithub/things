import { useResourceManagement } from "../resourceManagement"

export enum ResourceType {
    MANA = 'mana',
    LIFE = 'health'
}

export const standardManaPerLevelValue = 5;
export const standardLifePerLevelValue = 10;

export const useStandardManaSystem = () => useResourceManagement({
    type: ResourceType.MANA,
    currentValue: standardManaPerLevelValue,
    maxValue: standardManaPerLevelValue
});

export const useStandardLifeSystem = () => useResourceManagement({
    type: ResourceType.LIFE,
    currentValue: standardLifePerLevelValue,
    maxValue: standardLifePerLevelValue
});