interface ButtonProps {
  link?: string,
  text?: string,
  type?: any,
  onClick?: ()=> void,
  onSubmit?: ()=> {},
  icon?:string,
}

enum Rank {
  OchoHoras = 1,
  MediaJornada = 0.6,
  MediaFamiliar = 0.7,
}

interface Employee {
  name: string;
  rank: Rank;
  collected: boolean;
}

interface TipsContextType {
  employees: Employee[];
  totalTips: number;
  collected: boolean;
  addEmployee: (newEmployee: Employee) => void;
  divideTipsAmongEmployees: () => { [key: string]: number };
}
