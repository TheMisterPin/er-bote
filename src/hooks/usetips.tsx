import { useState } from 'react'

enum Rank {
  FullTime = 1,
  HalfTime = 0.6,
  Other = 0.7,
}

interface Employee {
  name: string;
  rank: Rank;
}

const useDivideTips = (totalTips: number, employees: Employee[]) => {
  const [dividedTips, setDividedTips] = useState<{ [key: string]: number }>({})

  const divideTips = () => {
    const totalWeight = employees.reduce((acc, curr) => acc + curr.rank, 0)
    const tipsDistribution = employees.reduce((acc, { name, rank }) => {
      acc[name] = parseFloat(((totalTips * (rank / totalWeight)).toFixed(2)))

      return acc
    }, {} as { [key: string]: number })

    setDividedTips(tipsDistribution)
  }

  divideTips()

  return dividedTips
}

export { useDivideTips, Rank }
