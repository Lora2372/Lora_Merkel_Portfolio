import React from "react"
import Layout from "../components/Layout"
import {StyledLinkBtn} from "../elements/LinkButtonElements"
import SEO from "../components/SEO"

import {ErrorPage} from "../elements/ErrorElements";

const Error = () => {
  return (
    <Layout>
      <ErrorPage>
        <div className="error-container">
          <h1>Oj, Något gick fel</h1>
          <StyledLinkBtn to="/">
            Tillbaka Hem
          </StyledLinkBtn>
        </div>
      </ErrorPage>
    </Layout>
  )
}

export default Error
