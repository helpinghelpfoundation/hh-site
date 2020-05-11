import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from "gatsby";
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  ProjectsWrapper,
  ProjectsImage,
  ProjectsPageTitle,
  ProjectsDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/redqinc/',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/redqinc/',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/redqinc',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/redqinc/',
    tooltip: 'Linked In',
  },
];

interface ProjectsProps {}

const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <ProjectsWrapper>
      <ProjectsPageTitle>
        <h2>Projects We've Sponsored / Working On</h2>
        <p>
         
        </p>
      </ProjectsPageTitle>
     
      <ProjectsDetails>
        <h2>CORDBoard - COVID-19 Open Research Dataset Dashboard</h2>
        <p>
        A Dashboard for COVID-19 Open Research Dataset (CORD-19). Enabling researchers to search, view Coronavirus based research papers in a simlpe way.       <Link to="/project-cordboard">Learn more.</Link>
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </ProjectsDetails>
    </ProjectsWrapper>
  );
};

export default Projects;
