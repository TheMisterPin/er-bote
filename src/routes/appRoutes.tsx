import { Route, Routes, Navigate } from 'react-router-dom'
import * as routes from './paths'
import * as pages from '../pages'

const {
  Homepage, StaffPage, CalculatePage,
} = pages
const {
  HOME, CALCULATE, STAFF,
} = routes

function AppRoutes(): JSX.Element {
  return (

    <Routes>
      <Route path={HOME} element={<Homepage />} />
      <Route path={STAFF} element={<StaffPage />} />
      <Route path={CALCULATE} element={<CalculatePage />} />
      <Route path="/" element={<Navigate to={HOME} />} />
    </Routes>

  )
}

export default AppRoutes
