import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroTitle,
  Desciption,
  BgText,
  IntroContentWrapper,
} from './style';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';

type IntroProps = {};

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

const Intro: React.FunctionComponent<IntroProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { about } = Data.site.siteMetadata;

  return (
    <IntroWrapper>
      <BgText>ABOUT</BgText>
      <IntroContentWrapper>
        <IntroTitle>Helping Those Who Help Others</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
