import Axios from "axios";

export const calculateDamage = async (payload: any) => {
    try {
        const response = await Axios.post("http://localhost:3001/calculate-damage", payload);
        return response.data;
    } catch (error) {
        console.error("Error calculating damage: ", error);
        throw error;
    }
};