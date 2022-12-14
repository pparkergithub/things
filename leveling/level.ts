export interface UseLeveling {
    currentLevel?: Ref<number>;
    maxLevel?: Ref<number>;
    levelUp(): void;
}

export const useLeveling = (currentLevel?: number, maxLevel?: number, onLevelUpCallback?: Function): UseLeveling => {
    const _currentLevel = ref(currentLevel);
    const _maxLevel = ref(maxLevel);

    const levelUp = () => {
        const newLevel = (_currentLevel.value || 0) + 1;
        if (!_maxLevel.value || _maxLevel.value >= newLevel) {
            _currentLevel.value = newLevel;
            if (onLevelUpCallback) {
                onLevelUpCallback();
            }
        }
    }

    return {
        _currentLevel,
        _maxLevel,
        levelUp
    }
}