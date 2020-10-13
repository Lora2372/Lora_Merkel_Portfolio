import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {StyledContactPage} from "../elements/ContactElements";
import {StyledContactForm} from "../elements/ContactElements";
import {StyledSubmitBtn} from "../elements/SubmitButtonElements";

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <StyledContactPage>
        <StyledContactForm>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/mbjpdord" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="namn"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
                className="form-control"
              ></textarea>
            </div>
            <StyledSubmitBtn type="submit">
              Kontakta mig
            </StyledSubmitBtn>
          </form>
        </StyledContactForm>
      </StyledContactPage>
    </Layout>
  )
}

export default contact
