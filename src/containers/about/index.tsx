import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: '#',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/HelpingHelpHQ',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/helpinghelpfoundation',
    tooltip: 'Github',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/helpinghelpfoundation',
    tooltip: 'LinkedIn',
  },

];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
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
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Who? What? Where? How? But?</h2>
        <p>
        At Helping Help Foundation, our primary and only focus is to HELP THOSE WHO HELP OTHERS so that can do MOOOOORE. 
        <br />
        We provide support including, but NOT limited to, using technology, fund raising, contacts, financial, research and training. And we are always hearing for more...
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>
      
      <AboutDetails>
        <h2>Boring details</h2>
        <p>
          We are a small team, to be precise, just 2. Everything has to start somewhere by someone. We are doing what we can and maybe inspire some more.
          <br />
          Also we are a 501(c)(3) non-profit organization registered in Texas, USA. You may look us on <a href="https://apps.irs.gov/app/eos/" target="_blank">IRS site</a>.
        </p>
        <h2>Interested to write for us? Or join us?</h2>        
        <p>
        We are always looking for inspiring stories. Please send us.. let's inspire more!!
        Contact us at any of the below if you'd like to help.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
