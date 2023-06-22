import {createContext, useReducer} from 'react'

export const StaffContext = createContext();

export const staffsReducer = (state, action) => {
               switch (action.type){
                              case 'GET_STAFFS':
                                             return {
                                                            staffs: action.payload
                                             }

                              case 'GET_STAFF':
                                             return {

                                             }

                              case 'CREATE_STAFF':
                                             return {
                                                            staffs: [action.payload, ...state.staffs]
                                             }

                              case 'UPDATE_STAFF':
                                                return {
   
                                                }

                              case 'DELETE_STAFF':
                                    return{
                              //             staffs: state.staffs.filter((w) => w._id !== action.payload._id)
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