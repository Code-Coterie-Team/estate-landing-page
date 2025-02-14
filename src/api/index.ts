import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiRoutes } from "../routes/apiRoutes";


const baseUrl = 'https://676ec671df5d7dac1ccbacc2.mockapi.io';


const creatApiPath =(baseUrl:string,pathName:string)=>{

 return `${baseUrl}/${pathName}`

}

export const useGetAllData=()=>{
    return useQuery({
        queryKey:['getAllData'],
        queryFn:async()=>{
            const response= await axios.get<IProject[]>(creatApiPath(baseUrl,apiRoutes.project));
            return response.data

        }
    })
}