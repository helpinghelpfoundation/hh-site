import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/contact"

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description=""
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
