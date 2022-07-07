import Layout from "../layouts/layout";
import styles from '../styles/About.module.scss';
import { motion, useAnimation } from 'framer-motion';




const About = () => {
  const aboutVariant = {
    hidden: { opacity: 0, y:30},
    visible: { opacity:1, y: 0, transition: { duration: 1, ease:'easeInOut'}
    }
  } 
  const skillsVariant = {
    hidden: { opacity: 0, y:30},
    visible: { opacity:1, y: 0, transition: { duration: 1, delay: 0.8, ease:'easeOut'}
    }
  } 
  const jobVariant = {
    hidden: { opacity: 0, y:20},
    visible: { opacity:1, y: 0, transition: { duration: 0.7, delay: 0.4, ease:'easeOut'}
    }
  }
  const descVariant = {
    hidden: { opacity: 0, y:20},
    visible: { opacity:1, y: 0, transition: { duration: 0.7, delay: 0.6, ease:'easeOut'}
    }
  }
  const listVariant = {
    hidden: { opacity: 0, y:20},
    visible: { opacity:1, y: 0, transition: { duration: 0.7, delay: 1.1, ease:'easeOut'}
    }
  }
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <section className={styles.about}>
            <div className={styles.heading}>
              <div className={styles.line}></div>
              <motion.h4 variants={aboutVariant} initial='hidden' animate='visible'>About</motion.h4>
            </div>
            <div className={styles.desc}>
              <motion.h2 variants={jobVariant} initial='hidden' animate='visible'>Front end developer</motion.h2>
              <motion.div variants={descVariant} initial='hidden' animate='visible'>
                <p>アメリカ8年・中国8年・日本7年。大学を機に日本に帰国し、現在は外資系のフロントエンド開発者。</p>
                <p>イラスト、デザイン、開発をすべてこなせる多才なディベロッパーを目指しており、途中で</p>
                <p>学んだことを共有できればと思い、このブログを作りました。数々の失敗から</p>
                <p>学んだことが一人にでも役に立つことができれば幸いに思います。</p>
              </motion.div>
              
            </div>
          </section>
          <section className={styles.skills}>
            <div className={styles.heading}>
              <div className={styles.line}></div>
              <motion.h4 variants={skillsVariant}  initial='hidden' animate='visible'>Skills</motion.h4>
            </div>
            <motion.div className={styles.content} variants={listVariant} initial='hidden' animate='visible'>
              <div className={styles.row}>
                <h4>Design</h4>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe After Effects</li>
                </ul>
              </div>
              <div className={styles.row}>
                <h4>Frontend</h4>
                <ul>
                  <li>Javascript</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Nextjs</li>
                </ul>
              </div>
              <div className={styles.row}>
                <h4>Backend</h4>
                <ul>
                  <li>Nodejs</li>
                  <li>Java(Spring Boot)</li>
                </ul>
              </div>
            </motion.div>
          </section>
        </div>
      </Layout>
    </>
    
  )
}

export default About
