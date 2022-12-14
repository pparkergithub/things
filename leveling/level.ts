import { Ref, ref } from "vue";

export interface UseLeveling {
    currentLevel: Ref<number>;
    maxLevel: Ref<number | undefined>;
    levelUp(): void;
}

export interface UseLevelingParams {
    currentLevel?: number;
    maxLevel?: number;
    onLevelUpCallback?: Function;
}

export const useLeveling = (params?: UseLevelingParams): UseLeveling => {
    const _currentLevel = ref(params?.currentLevel || 0);
    const _maxLevel = ref(params?.maxLevel);

    const levelUp = () => {
        const newLevel = (_currentLevel.value || 0) + 1;
        if (!_maxLevel.value || _maxLevel.value >= newLevel) {
            _currentLevel.value = newLevel;
            if (params?.onLevelUpCallback) {
                params.onLevelUpCallback();
            }
        }
    }

    return {
        currentLevel: _currentLevel,
        maxLevel: _maxLevel,
        levelUp
    }
}