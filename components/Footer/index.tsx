/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Facebook,
  Linkedin,
  Github,
  Instagram,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<IFooterLink &
  React.AnchorHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  goto,
  ...rest
}) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/people/Raghuram-Guddati/pfbid02js7ZQ8rE6ZR2ChfPePj5GRXexxXSgfRG2nNTVu3bsbp2ron7MW559hQEAeFd1UMkl/"
          aria-label="Go To Raghuram Guddati Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/raghuram-guddati-922911260/"
          aria-label="Go To Raghuram Guddati Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Rag2003"
          aria-label="Go To Raghuram Guddati Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/raghu_41414/"
          aria-label="Go To Raghuram Guddati Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
