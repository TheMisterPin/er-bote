interface TextValueProps {
  type: string
  text: string;
}

function Text({ type, text }: TextValueProps) {
  switch (type) {
    case 'title':
      return <h1 className="font-bangers font-extrabold text-8xl text-amber-300 text-border">{text}</h1>
    case 'result':
      return (
        <p className="font-bangers text-center text-5xl text-amber-300 text-border">
          {' '}
          €  
          {text}
        </p>
      )
    case 'pageTitle':
      return <h2 className="font-bangers font-bold text-6xl text-amber-300 text-border-thin">{text}</h2>
    case 'subtitle':
      return <h2 className="font-akaya font-bold text-3xl text-yellow-950">{text}</h2>
    case 'label':
      return <h4 className="font-akaya font-bold text-2xl text-yellow-950">{text}</h4>
    case 'description':
      return <span>{text}</span>
    case 'buttonText':
      return <span className="font-akaya font-bold text-1xl text-yellow-950">{text}</span>
    default:
      return <p>{text}</p>
  }
}

export default Text
