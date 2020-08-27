import React from "react"
import Layout from "../components/layout"
import Histogram from "../components/Histogram"


const IndexPage = () => (
  <Layout>
    <Histogram data={{"apples": 10, "oranges": 5, "pears": 15}} />

    <Histogram data={{"apples": 14, "oranges": 12, "pears": 1}} />
  </Layout>
)

export default IndexPage
