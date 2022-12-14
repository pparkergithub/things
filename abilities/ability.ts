import { computed, ComputedRef, ref, Ref } from "vue";
import { ResourceType } from "../standards/resourceManagementOptions";

export interface AbilityCost {
    type: ResourceType;
    cost: number;
}

export interface UseAbility {
    name: Ref<string>;
    cost: Ref<AbilityCost | undefined>;
    cooldown: Ref<number | undefined>;
    isOnCooldown: ComputedRef<boolean>;
    activate(): void;
}

export const useAbility = (name: string, cost?: AbilityCost, cooldown?: number): UseAbility => {
    const _name = ref(name);
    const _cost = ref(cost);
    const _cooldown = ref(cooldown);
    const _isOnCooldown = ref(false);

    const setCooldown = () => {
        _isOnCooldown.value = true;
        setTimeout(() => {
            _isOnCooldown.value = false;
        }, 1000 * (_cooldown?.value || 0))
    }

    const isOnCooldown = computed(() => _isOnCooldown.value);

    const activate = () => {
        console.log(_name.value); // this will be the ability action later
        setCooldown();
    }



    return {
        name: _name,
        cost: _cost,
        cooldown: _cooldown,
        isOnCooldown,
        activate
    }
}