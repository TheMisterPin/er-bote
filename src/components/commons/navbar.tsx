import tw from 'twin.macro'

import { STAFF, HOME, CALCULATE } from '../../routes/paths'
import Button from '../UI/button'

const Links = tw.div`
flex
gap-4
`

function Navbar() {
  return (
    <nav className="bg-amber-500 absolute bottom-0 px-32 h-[10vh] justify-between flex gap-x-8">

      <Links>
        <Button link={HOME} text="HOME" />
        <Button link={STAFF} text="ABOUT US" />
        <Button link={CALCULATE} text="LOCATIONS" />
      </Links>
    </nav>
  )
}

export default Navbar
