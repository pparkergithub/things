import { ResourceType } from "../standards/resourceManagementOptions";
import { useAbility } from "./ability"

export const useSlapAbility = () => useAbility({
    name: 'slap',
    cost: undefined,
    cooldown: 1,
    onActivate: () => {
        console.log("You just got slapped!");
    }
});

export const slapExample = () => {
    const slapAbility = useSlapAbility();
    if (!slapAbility.isOnCooldown) {
        slapAbility.activate();
    }
}

export const usePewAbility = () => useAbility({
    name: 'pew',
    cost: { type: ResourceType.MANA, cost: 1 },
    cooldown: 0.5,
    onActivate: () => {
        console.log('pew');
    }
});