import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../containers/projects"

type ProjectsPageProps = {}

const ProjectsPage: React.FunctionComponent<ProjectsPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Projects at Helping Help Foundation"
        description=""
      />

      <Projects />
    </Layout>
  )
}

export default ProjectsPage
