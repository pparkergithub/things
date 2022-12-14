import { ResourceType } from "../standards/resourceManagementOptions";
import { useAbility } from "./ability"

export const slap = () => useAbility('Slap', undefined, 1);

export const pew = () => useAbility('pew', { type: ResourceType.MANA, cost: 1 }, 0.5);