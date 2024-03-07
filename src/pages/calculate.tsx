/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react' // Import React and useState
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/UI/button'
import Text from '../components/UI/text'

type FormData = {
  totalBote: string;
  horas8: string;
  horas6: string;
  horas5: string;
}

const Rank = {
  OchoHoras: 1,
  MediaJornada: 0.6,
  MediaFamiliar: 0.7,
}

interface Result {
  tips1: number;
  tips2: number;
  tips3: number;
}

function CalculatePage() {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState<Result | null>(null) // Use state to manage the result

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const totalBote = parseFloat(data.totalBote)
    const horas8 = parseInt(data.horas8, 10)
    const horas6 = parseInt(data.horas6, 10)
    const horas5 = parseInt(data.horas5, 10)

    const totalPersonas = (horas8 * Rank.OchoHoras) + (horas6 * Rank.MediaJornada) + (horas5 * Rank.MediaFamiliar)
    const amountPerRank = totalBote / totalPersonas

    const total8Horas = amountPerRank * Rank.OchoHoras
    const totalMediaJornada = amountPerRank * Rank.MediaJornada
    const totalMediaFamiliar = amountPerRank * Rank.MediaFamiliar

    // Corrected object assignment
    setResult({
      tips1: total8Horas,
      tips2: totalMediaJornada,
      tips3: totalMediaFamiliar,
    })
  }

  return (
    <div className="h-[100vh] w-[95vw] flex pt-24 items-center gap-y-10 flex-col bg-[url('/background.png')]
      bg-no-repeat bg-center"
    >
      <Text type="pageTitle" text="Repartimos!" />
      {!result ? ( // Correct conditional rendering
        <form onSubmit={handleSubmit(onSubmit)} className="glass-effect flex flex-col gap-2 py-4 items-center">
          <Text type="label" text="Cuanto Bote ha tocado?" />
          <input {...register('totalBote')} className="glass-blue w-20" type="number" />

          <Text type="label" text="Cuantos a 8 horas?" />
          <input {...register('horas8')} className="glass-blue w-20" type="number" />

          <Text type="label" text="Cuantos a 6 horas?" />
          <input {...register('horas6')} className="glass-blue w-20" type="number" />

          <Text type="label" text="Cuantos a 5 horas?" />
          <input {...register('horas5')} className="glass-blue w-20" type="number" />

          <Button type="submit" text="Calcula" />
        </form>
      ) : (
        <div className="glass-effect">
          <Text type="label" text="Total por 8 horas" />
          <Text type="result" text={result.tips1.toFixed(2)} />
          <Text type="label" text="Total por 6 horas" />
          <Text type="result" text={result.tips2.toFixed(2)} />
          <Text type="label" text="Total por 5 horas" />
          <Text type="result" text={result.tips3.toFixed(2)} />
        </div>
      )}
    </div>
  )
}

export default CalculatePage
