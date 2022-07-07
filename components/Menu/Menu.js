import React, {useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import styles from './Menu.module.scss';
import Github from '../../public/github.svg';
import Linkedin from '../../public/linkedin.svg';
import Behance from '../../public/behance.svg';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  open: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.69,0.02,0.15,0.98]
    } 
  },
  closed: { 
    opacity: 1, 
    y: '-100%', 
    transition: { 
      duration: 1, 
      ease: [0.69,0.02,0.15,0.98]
    }
  }
}

const linkVariant = {
  
}
const Menu = ({isOpen, setIsOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(`MENU IS OPEN${isOpen}`);
  }, [isOpen])
  
  return ( 
    <AnimatePresence>
    {
      isOpen && (
        <motion.div initial='closed' exit='closed' animate={isOpen ? 'open' : 'closed'} variants={variants} className={styles.menu} ref={containerRef}>
        <div className={styles.content}>
          <div className={styles.text}>
            <ul className={styles.contact}>
              <li>
                <div className={styles.icon}>
                  <Github />
                </div>
                <Link href='/'><a className={styles.link}>Github</a></Link>
              </li>
              <li>
                <div className={styles.icon}>
                  <Linkedin/>
                </div>
                
                <Link href='/'><a className={styles.link}>Linkedin</a></Link>
              </li>
              <li>
                <div className={styles.icon}>
                  <Behance />
                </div>
                
                <Link href='/'>
                  <a className={styles.link}>
                    Email
                  </a>
                  
                </Link>
                
              </li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href='/'>
                  <a onClick={() => setIsOpen(!isOpen)}>
                    Home
                  </a>
                  
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a onClick={() => setIsOpen(!isOpen)}>
                    About
                  </a>
                  
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a onClick={() => setIsOpen(!isOpen)}>
                    Articles
                  </a>
                  
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a onClick={() => setIsOpen(!isOpen)}>
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a onClick={() => setIsOpen(!isOpen)}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
      </motion.div>
      )
    }
      
    </AnimatePresence>
    
  )
}

export default Menu