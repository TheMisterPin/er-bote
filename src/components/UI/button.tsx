/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import tw from 'twin.macro'

const TwButton = styled.button`
  ${tw`flex items-center justify-center  font-extrabold p-2 rounded-full font-akaya text-2xl  mt-1`}

`

const Icon = styled.img`
  ${tw`object-contain`}
  width: 50px; 
  height: 50px; 
`

const TwA = styled.a`
  ${tw`no-underline font-extrabold p-6 rounded-full font-akaya text-2xl  mt-14`}
  color: inherit; 

`

function Button({
  link, text, type, onClick, onSubmit, icon,
}: ButtonProps) {
  // Determine the rendering mode
  const renderingMode = () => {
    if (icon && link) return 'iconAndLink'
    if (icon && !link) return 'icon'
    if (!icon && link) return 'link'

    return 'text'
  }

  // Render content based on mode
  const renderContent = () => {
    switch (renderingMode()) {
      case 'icon':
        return <Icon src={icon} alt={text || ''} />

      case 'link':
        return <TwA href={link}>{text}</TwA>

      case 'iconAndLink':
        return (
          <>
            <Icon src={icon} alt={text || ''} />
            <TwA href={link}>{text}</TwA>
          </>
        )

      default: // 'text'
        return text
    }
  }

  return (
    <TwButton className="b1 b-thin" type={type} onClick={onClick} onSubmit={onSubmit}>
      {renderContent()}
    </TwButton>
  )
}

export default Button
