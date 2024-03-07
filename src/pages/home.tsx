import { Link } from 'react-router-dom'
import Text from '../components/UI/text'
import { CALCULATE } from '../routes/paths'

function HomePage() {
  return (
    <div className="h-[100vh] flex pt-24 items-center gap-y-10 flex-col bg-[url('/background.png')]
  bg-contain
  bg-no-repeat
  bg-center "
    >
      <Text type="title" text="Er Bote" />
      <Text type="subtitle" text="Ahora sin dolor de cabeza!" />

      <Link to={CALCULATE} className="b1 font-extrabold p-6 rounded-full font-akaya text-2xl b-thick mt-14"> VAMOS REPARTIENDO</Link>
      {' '}

    </div>
  )
}
export default HomePage
