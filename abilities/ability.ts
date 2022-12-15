import { computed, ComputedRef, ref, Ref } from "vue";
import { ResourceType } from "../standards/resourceManagementOptions";

export interface AbilityCost {
    type: ResourceType;
    cost: number;
}

export interface UseAbility {
    name: Ref<string>;
    cost: Ref<AbilityCost | undefined>;
    cooldown: Ref<number | undefined>; // seconds
    isOnCooldown: ComputedRef<boolean>;
    onActivate: Ref<(() => void) | undefined>;
    activate(): void;
}

export interface UseAbilityParams {
    name: string;
    cost?: AbilityCost;
    cooldown?: number; // seconds
    onActivate?: () => void;
}

export const useAbility = (params: UseAbilityParams): UseAbility => {
    const _name = ref(params.name);
    const _cost = ref(params.cost);
    const _cooldown = ref(params.cooldown);
    const _onActivate = ref(params.onActivate);
    const _isOnCooldown = ref(false);

    const setCooldown = () => {
        _isOnCooldown.value = true;
        setTimeout(() => {
            _isOnCooldown.value = false;
        }, 1000 * (_cooldown?.value || 0))
    }

    const isOnCooldown = computed(() => _isOnCooldown.value);

    const activate = () => {
        if (_onActivate.value) {
            _onActivate.value.call;
        }
        setCooldown();
    }



    return {
        name: _name,
        cost: _cost,
        cooldown: _cooldown,
        isOnCooldown,
        onActivate: _onActivate,
        activate
    }
}