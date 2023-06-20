import { StaffContext } from "../Context/StaffContext";
import { useContext } from "react";

export const useStaffsContext = () => {
               const context = useContext(StaffContext)

               if(!context)
               {
                              throw Error('useStaffContext Must be used inside a StaffContextProvider')
               }

               return  context
}