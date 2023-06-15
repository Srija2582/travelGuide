import './index.css'

const Travel = props => {
  const {eachPlace} = props
  const {name, imageUrl, description} = eachPlace
  console.log(name)
  return (
    <li className="list-style">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default Travel
