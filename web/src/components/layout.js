import React from 'react'
import Header from './header'

import TwitterIcon from '../../static/twitter.svg'
import LinkedInIcon from '../../static/linkedin.svg'
import MailIcon from '../../static/mail.svg'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.iconWrapper}>
          <a
            href='https://twitter.com/CalumSieppert'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon className={styles.icon} />
          </a>
          <a
            href='https://www.linkedin.com/in/calum-sieppert/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href='mailto:sieppertcalum@gmail.com' rel='noopener noreferrer'>
            <MailIcon className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
