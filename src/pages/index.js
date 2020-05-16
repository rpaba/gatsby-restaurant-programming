import React from "react"
import styled from "styled-components"
import { FaBeer } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Home page</h3>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
