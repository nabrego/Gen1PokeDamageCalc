import Axios from "axios";

export const calculateDamage = async (payload: any) => {
    try {
        const response = await Axios.post("https://gen1-poke-damage-calc-api.vercel.app/calculate-damage", payload);
        return response.data;
    } catch (error) {
        console.error("Error calculating damage: ", error);
        throw error;
    }
};