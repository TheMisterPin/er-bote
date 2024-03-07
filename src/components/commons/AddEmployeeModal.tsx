// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable react/button-has-type */
// import { useForm } from 'react-hook-form'
// import { useTips } from '../../hooks/tips'

// interface AddEmployeeModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

// interface FormValues {
//   name: string
//   hours: number
// }

// function AddEmployeeModal({ isOpen, onClose }: AddEmployeeModalProps) {
//   const { addEmployee } = useTips()
//   const { register, handleSubmit, reset } = useForm<FormValues>()

//   const rankMap: { [key: number]: Rank } = {
//     8: Rank.OchoHoras,
//     7: Rank.MediaJornada,
//     6: Rank.MediaFamiliar,
//   }

//   const onSubmit = (data: FormValues) => {
//     const employeeToAdd = {
//       name: data.name,
//       rank: rankMap[data.hours],
//       totalTips: 0,
//       collected: false,
//     }

//     addEmployee(employeeToAdd)
//     onClose() // Close modal after submitting
//     reset() // Reset form fields
//   }

//   if (!isOpen) {
//     return null
//   }

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="flex justify-between items-center">
//           <h4 className="text-lg">Add Employee</h4>
//           <button onClick={onClose} className="btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input
//             {...register('name', { required: true })}
//             type="text"
//             placeholder="Name"
//             className="input input-bordered w-full max-w-xs"
//           />
//           <select
//             {...register('hours', { required: true })}
//             className="select select-bordered w-full max-w-xs"
//           >
//             <option value={8}>8 Hours - Full Time</option>
//             <option value={7}>7 Hours - Media Jornada</option>
//             <option value={6}>6 Hours - Media Familiar</option>
//           </select>
//           <button type="submit" className="btn btn-primary mt-4">
//             Add Employee
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddEmployeeModal
