import './index.css'

const DestinationItem = props => {
  const {destinationdetails} = props
  const {imageUrl, name} = destinationdetails
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
