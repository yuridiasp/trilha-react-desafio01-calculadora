import './styles.css'

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>{label}</button>
  )
}

export default Button