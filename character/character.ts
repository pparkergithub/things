import { useLeveling } from "../leveling/level";

export interface Character {
    name?: string;
}

export const useCharacter = () => {
    const { currentLevel, maxLevel, levelUp } = useLeveling(0, undefined, undefined);
}