import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const baseUrl = 'https://676ec671df5d7dac1ccbacc2.mockapi.io/Estate-GreatStack/Estate-GreatStack';

interface IProject{
    image:string,
    name:string,
    price:string,
    city:string,
    id:string
}

export const useGetAllData=()=>{
    return useQuery({
        queryKey:['getAllData'],
        queryFn:async()=>{
            const response= await axios.get<IProject[]>(baseUrl);
            return response.data

        }
    })
}