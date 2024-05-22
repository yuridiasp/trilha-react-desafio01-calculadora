import './styles.css'

// eslint-disable-next-line react/prop-types
export default function Input ({ value }) {
  return (
    <div className='InputContainer'>
      <input disabled value={value} />
    </div>
  )
}