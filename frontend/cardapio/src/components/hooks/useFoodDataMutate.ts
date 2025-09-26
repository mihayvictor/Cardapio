import axios, { type AxiosPromise } from "axios"
import type { FoodData } from "../../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';


const postData = async (data: FoodData): Promise<any> => {
    await new Promise(res => setTimeout(res, 2000))
    const response = await axios.post<FoodData>(API_URL + '/food', data)
    return response.data
}


export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
        queryClient.invalidateQueries({queryKey :['food-data']});
        },
    })
  
    
}