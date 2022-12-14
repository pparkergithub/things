import { Ref } from "vue";
import { UseAbility } from "../abilities/ability";
import { useLeveling } from "../leveling/level";
import { UseResourceManagement, useResourceManagement } from "../resourceManagement";
import { useStandardLifeSystem, useStandardManaSystem } from "../standards/resourceManagementOptions";

export interface UseCharacter {
    name: Ref<string>;
    abilities: Ref<UseAbility[]>;
    resources: Ref<UseResourceManagement[]>;
}

export const useCharacter = (): UseCharacter => {
    const { currentLevel, maxLevel, levelUp } = useLeveling();
    const mana = useStandardManaSystem();
    const life = useStandardLifeSystem();
}