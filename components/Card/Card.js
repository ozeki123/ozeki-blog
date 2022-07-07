import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import styles from './Card.module.scss';

const Card = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(posts);
    if(inView) {
      controls.start('visible');
    }
  }, [controls, inView])

  const postsVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease:'easeInOut' } }
  }

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} passHref key={index}>
        <a>
          <motion.img 
            src={post.frontMatter.thumbnailUrl}
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
            ref={ref}
            variants={postsVariant}
            animate={controls}
            initial="hidden"
          />
          <div className={styles.details}>
            <div className={styles.subheading}>
              <p className={styles.category}>{post.frontMatter.category}</p>
              <div className={styles.circle}/>
              <p>{post.frontMatter.date}</p>
            </div>  
            <div className={styles.title}>
              <Link href={`/blog/${post.slug}`} passHref key={index}>
                <a>{post.frontMatter.title}</a>
              </Link>
            </div>
            
          </div>
        </a>
        
      </Link>
      
      
      
    </article>
  )
}

export default Card
