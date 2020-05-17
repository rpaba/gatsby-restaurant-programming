import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuImg}>
      <Banner title="our menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
