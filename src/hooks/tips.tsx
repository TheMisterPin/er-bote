// import {
//   createContext, useContext, useMemo, ReactNode, useEffect,
// } from 'react'
// import useLocalStorage from './useLocalStorage'

// const initialState: TipsContextType = {
//   employees: [],
//   totalTips: 0,
//   collected: false,
//   addEmployee: () => { },
//   divideTipsAmongEmployees: () => ({}),
// }

// const TipsContext = createContext<TipsContextType>(initialState)

// export function TipsProvider({ children }: { children: ReactNode }): JSX.Element {
//   const [employees, setEmployees] = useLocalStorage<Employee[]>('employees', [])
//   const [totalTips, setTotalTips] = useLocalStorage<number>('totalTips', 0)
//   const [collected, setCollected] = useLocalStorage<Employee['collected']>('collected', false)

//   const addEmployee = (newEmployee: Employee) => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee])
//   }
//   const toggleCollected = (employee : Employee) => {
//     setCollected(!collected)
//   }

//   const divideTipsAmongEmployees = () => {
//     const totalWeight = employees.reduce((acc, curr) => acc + curr.rank, 0)

//     return employees.reduce((acc, { name, rank }) => {
//       acc[name] = parseFloat(((totalTips * (rank / totalWeight)).toFixed(2)))

//       return acc
//     }, {} as { [key: string]: number })
//   }

//   useEffect(() => {
//     divideTipsAmongEmployees()
//   }, [employees, totalTips])

//   const value = useMemo(() => ({
//     employees,
//     totalTips,
//     collected,
//     addEmployee,
//     hasCollected,
//     divideTipsAmongEmployees,
//   }), [employees, hasCollected, collected, totalTips, divideTipsAmongEmployees])

//   return (
//     <TipsContext.Provider value={value}>
//       {children}
//     </TipsContext.Provider>
//   )
// }

// export const useTips = () => {
//   const context = useContext(TipsContext)

//   if (!context) {
//     throw new Error('useTips must be used within a TipsProvider')
//   }

//   return context
// }
