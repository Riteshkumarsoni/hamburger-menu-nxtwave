import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="common-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-paragraph">
        Sorry, we cannot find that page. You will find lots to explore on the home page
      </p>
    </div>
  </>
)

export default Home
