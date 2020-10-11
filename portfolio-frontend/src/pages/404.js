import React from "react"
import Layout from "../components/Layout"
import {StyledLinkBtn} from "../elements/LinkButtonElements"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oj, Något gick fel</h1>
          <StyledLinkBtn to="/">
            Tillbaka Hem
          </StyledLinkBtn>
        </div>
      </main>
    </Layout>
  )
}

export default Error
