import {createContext, useReducer} from 'react'

export const StaffContext = createContext();

export const staffsReducer = (state, action) => {
               switch (action.type){
                              case 'SET_STAFFS':
                                             return {
                                                            staffs: action.payload
                                             }

                              case 'CREATE_STAFF':
                                             return {
                                                            staffs: [action.payload, ...state.staffs]
                                             }
                              default:
                                             return state
               }
}

export const StaffContextProvider = ({children}) => {
               const [state, dispatch] = useReducer(staffsReducer, {
                              staffs: null
               })


               return(
                        <StaffContext.Provider value={{...state, dispatch}}>
                              {children}
                        </StaffContext.Provider>      
               )
}