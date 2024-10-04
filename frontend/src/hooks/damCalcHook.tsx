import { useState } from "react";
import { calculateDamage } from "../services/damCalcService";

export const damCalcHook = () => {
    const [damageInfo, setDamageInfo] = useState<number[]>([]);

    const calcDamage = async (payload: any) => {
        try {
            const damage = await calculateDamage(payload);
            setDamageInfo(damage);
        } catch (error) {
            console.error("Error calculating damage: ", error);
        }
    };

    return {
        damageInfo,
        calcDamage,
    };
};