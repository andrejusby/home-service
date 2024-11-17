import { useState } from "react"
import Hero from "../components/common/Hero"
import CategoryList from "../components/category/CategoryList"
import BusinessList from "../components/business/BusinessList"
import styles from './Home.module.scss'

const Home = () => {
  const [searchText, setSearchText] = useState<string>('') // Paieskos busena
  return (
    <>
      <Hero onSearchChange={setSearchText}/> {/* Perduodadame paiieskos funkcija */}
      <CategoryList/>
      <h2 className={styles.title}></h2>
      <BusinessList searchText={searchText} limit={4}/> {/* Perduodadame paiieskos teksta, ir rodome tik 4 paslaugas */}
    </>
  )
}

export default Home