import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../layouts/layout.js';
import styles from '../styles/Home.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Menu from '../components/Menu/Menu.js';

const variants={
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: 40}
}

function Home({ posts }) {
  return (
    <>
      <Layout>
        <main className={styles.home}>
          <article className={styles.banner}>
            <motion.img 
              src={posts[0].frontMatter.thumbnailUrl}
              initial={{
                opacity: 0,
                scale: 1.02,
              }}
              animate={{
                opacity: 1,
                scale: 1,

              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.6, 
                  ease: [0.43, 0.13, 0.23, 0.8]
                }
              }}
            />
            <div className={styles.details}>
              <motion.div 
                className={styles.subheading}
                initial={{ 
                  opacity: 0,
                  y: 30 
                }}
                animate={{ 
                  opacity: 1,
                  y: 0 
                }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: [0.43, 0.13, 0.23, 0.8]
                }}
              >
                <p className={styles.category}>{posts[0].frontMatter.category}</p>
                <div className={styles.circle}/>
                <p>{posts[0].frontMatter.date}</p>
              </motion.div>
              <motion.div 
                className={styles.heading}
                initial={{ 
                  opacity: 0,
                  y: 30 
                }}
                animate={{ 
                  opacity: 1,
                  y: 0 
                }}
                transition={{
                  delay: 1,
                  duration: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.8]
                }}
              >
                <Link href={`/blog/${posts[0].slug}`} passHref key={1}>
                  <h3>{posts[0].frontMatter.title}</h3>
                </Link>  
              </motion.div>
              
            </div>
                
          </article>
          <section className={styles.grid}>
            {
              posts.slice(1).map((post, index) => (
                <article className={styles.card}>
                  <Link href={`/blog/${post.slug}`} passHref key={index}>
                    <a>
                      <motion.img 
                        src={post.frontMatter.thumbnailUrl}
                        key={index}
                        initial='hidden'
                        transition={{ duration: 1, delay:index * 0.12, ease: 'easeInOut'}}
                        whileInView='visible'
                        viewport={{ once: true }}
                        variants={{
                          visible: { opacity: 1, y: 0 },
                          hidden: { opacity: 0, y: 50 }
                        }}
                        whileHover={{
                          scale: 1.025,
                          transition: {
                            duration: 0.6, 
                            ease: [0.43, 0.13, 0.23, 0.8]
                          }
                        }}
                      />
                      <div className={styles.details}>
                        <motion.div className={styles.subheading} 
                        variants={{
                          visible: {opacity: 1, y: 0},
                          hidden: {opacity: 0, y: 20}
                        }}
                        initial='hidden'
                        transition={{ duration: 1, delay: index * 0.05, ease: 'easeInOut'}}
                        whileInView='visible'
                        viewport={{ once: true }}>
                            <p className={styles.category}>
                              {post.frontMatter.category}
                            </p>
                          <div className={styles.circle}/>
                          <p>{post.frontMatter.date}</p>
                        </motion.div>  
                        <div className={styles.title}>
                          <Link href={`/blog/${post.slug}`} passHref key={index}>
                            <motion.h5  
                              variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 40}
                              }}
                              initial='hidden'
                              transition={{ duration: 1, delay: (index * 0.11), ease: 'easeInOut'}}
                              whileInView='visible'
                              viewport={{ once: true }}
                              whileHover={{
                                x: 10,
                                transition: {
                                  duration: 0.6, 
                                  ease: 'easeInOut'
                                }
                              }}
                              >
                                {post.frontMatter.title}
                              
                            </motion.h5>
                          </Link>
                        </div>
                        
                      </div>
                    </a>
                    
                  </Link>
                  
                  
                  
                </article>
              ))
            }
          </section>
          
        </main>

        <footer>
        </footer>
      </Layout>
    </>
    
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(file => {
    const fileData = fs.readFileSync(path.join('posts', file), 'utf-8')
    const { data: frontMatter } = matter(fileData)

    return {
      frontMatter,
      slug: file.split('.')[0]
    }
  })
  return {
    props: { posts }
  }
}

export default Home
