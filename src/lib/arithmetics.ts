type Answer = {
  problem: string;
  answer: number;
}

const MAX_VALUE = 100;

const operators = [
  {
    symbol: '+',
    forward: (op1: number, op2: number) => op1 + op2,
    backward: (answer: number, op2: number) => answer - op2,
    maxOp2: (answer: number) => MAX_VALUE - answer,
    adjust: (tempOp1: number, op2: number, tempAnswer: number) => ({ op1: tempOp1, answer: tempAnswer}),
  },
  {
    symbol: '-',
    forward: (op1: number, op2: number) => op1 - op2,
    backward: (answer: number, op2: number) => answer + op2,
    maxOp2: (answer: number) => MAX_VALUE,
    adjust: (tempOp1: number, op2: number,  tempAnswer: number) => ({ op1: tempOp1, answer: tempAnswer}),
  },
  {
    symbol: '*',
    forward: (op1: number, op2: number) => op1 * op2,
    backward: (answer: number, op2: number) => answer / op2,
    maxOp2: (answer: number) => answer,
    adjust: (tempOp1: number, op2: number,  tempAnswer: number) => ({ op1: Math.floor(tempOp1), answer: Math.floor(tempOp1) * op2}),
  },
  {
    symbol: '/',
    forward: (op1: number, op2: number) => op1 / op2,
    backward: (answer: number, op2: number) => answer * op2,
    maxOp2: (answer: number) => 20, // to adjust the difficulty
    adjust: (tempOp1: number, op2: number,  tempAnswer: number) => ({ op1: tempOp1, answer: tempAnswer}),
  },
] as const;

export const generateProblem = (): Answer => {
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const tempAnswer = Math.floor(Math.random() * MAX_VALUE);
  const op2 = Math.floor(Math.random() * operator.maxOp2(tempAnswer));
  const tempOp1 = operator.backward(tempAnswer, op2);

  const {op1, answer} = operator.adjust(tempOp1, op2, tempAnswer);

  return {
    problem: `${op1} ${operator.symbol} ${op2} =`,
    answer,
  }
};