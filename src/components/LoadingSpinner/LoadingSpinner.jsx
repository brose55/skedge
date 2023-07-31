import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return <img src={`${process.env.PUBLIC_URL}/icons/dark-gear.svg`} id='loading-spinner' alt='gear indicating page loading' />
}
 
export default LoadingSpinner
 