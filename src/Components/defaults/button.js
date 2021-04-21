const button = ({className, onClick, name, text}) => (
  <button className={className} onClick={onClick} name={name}>
    {text}
  </button>
)

export default button;