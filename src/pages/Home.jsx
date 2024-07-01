import CategoryList from "../components/category/CategoryList"
import Hero from "../components/common/Hero"
import styles from './Home.module.scss'
import BusinessList from "../components/business/BusinessList"

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList/>
      <h2 className={styles.title}></h2>
      <BusinessList />
    </>
  )
}

export default Home