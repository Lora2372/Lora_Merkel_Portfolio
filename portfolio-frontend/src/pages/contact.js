import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {
          StyledContactPage,
          StyledContactForm,
          StyledContactFormGroup,
          StyledContactFormControl,
          StyledContactFormTextArea
        } from "../elements/ContactElements";
import {StyledSubmitBtn} from "../elements/SubmitButtonElements";

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <StyledContactPage>
        <StyledContactForm>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/mbjpdord" method="POST">
            <StyledContactFormGroup>
              <StyledContactFormControl
                type="text"
                placeholder="namn"
                name="name"
              />
              <StyledContactFormControl
                type="email"
                placeholder="epost"
                name="email"
              />
              <StyledContactFormTextArea
                name="message"
                rows="5"
                placeholder="meddelande"
              ></StyledContactFormTextArea>
            </StyledContactFormGroup>
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
