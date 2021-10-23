import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function ScrollToTop() {
    function ScrollTop() {
         window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }
  return (
      <>
    <button onClick={ScrollTop} className="float">
   ☝️
    </button>
    </>
  )
}
