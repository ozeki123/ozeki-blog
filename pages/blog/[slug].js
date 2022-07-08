import React, { useEffect, useState, useRef } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, hydrate } from 'next-mdx-remote';
import styles from '../../styles/Posts.module.scss';
import Layout from '../../layouts/layout.js';
import Details from '../../components/Details/Details';
import { renderToString } from "react-dom/server";
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypePrism from 'rehype-prism-plus';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import hljs from 'highlight.js';
import { useInView } from 'react-intersection-observer';

hljs.configure({languages:['javascript', 'scss']});
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('scss', scss);


const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      // [rehypeHighlight, {languages: {javascript}}]
       // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
    ],
  },
};



const PostFile = ({ posts, slug, frontMatter: { title, thumbnailUrl, description, date, category }, mdxSource }) => {
  const [headings, setHeadings] = useState([]);
  const [links, setLinks] = useState([]);
  const [refs, setRefs] = useState([]);
  const [elements, setElements] = useState([]);
  const [isVisible, setIsVisible] = useState();
  const [focus, setFocus] = useState();
  const [href, setHref] = useState();
  const [active, setActive] = useState();
  const [temp, setTemp] = useState();
  const [tocLinks, setTocLinks] = useState();
  const [counter, setCounter] = useState(0);
  const headingElements = [];
  const tocElements = [];
  let headingArray = [];
  let linkArray = [];
  let refArray = [];
  let hrefArray = [];
  let tocArray = [];
  const headingRef = useRef([]);
  
  useEffect(() => {
    hljs.initHighlighting();
    
}, []);

  const createToc = () => {
    // console.log('a', headingRef);
  }
  
  const getHeadings = () => {
    
    if(typeof window !== 'undefined'){
      headingElements = document.querySelectorAll('h2');
      
      setElements(headingElements);
      // console.log('headingelements', headingElements)
      // setTocLinks(tocElements);
      // console.log('links', tocLinks);
      tocElements = document.querySelectorAll('.row');
      // console.log('tocElements', tocElements);

      
    }

    
    
    Object.values(headingElements).slice(1).map(heading => {
      // headingText = heading.replace('<h2>', '').replace('</h2>', '')
      // console.log(heading.id);
      // console.log(heading.textContent);
      headingArray.push(heading.textContent);
      linkArray.push(heading.id);
      refArray.push(heading);
      hrefArray.push[heading.href]
    })
      // Object.values(tocElements).map(toc => {
      //   tocArray.push(toc)
      // })
  }

 
  useEffect(() => {
    getHeadings();
    setHeadings(headingArray);
    setLinks(linkArray);
    setRefs(refArray);
    setHref(hrefArray);
    setTocLinks(tocArray);
    createToc();
  }, [])


   useEffect(() => {
    //  console.log('b',headingRef.current.children[1])
   }, [headingRef])
   
  

  //Option 1: Use query selector on heading links and toggle classname on
  //Option 2: use entry.isIntersecting

  //Option 3: add ID to table of contents headings and querySelect the items, then use classList.add to add a class to apply css styling.

  useEffect(() => {
    console.log('links', links)
    const observer = new IntersectionObserver((entries, observer) => {
      console.log('entries', entries);
      entries.forEach((entry) => {
        let index = entry.target.elems_index;
        // console.log('Intersecting', entry.target, entry.isIntersecting);
        // entry.target.classList.toggle('target', entry.isIntersecting)
        // setTemp(entry.target.id)
        // if( temp != entry.target.id) {
        //   console.log('its diferent!!!')
        // }
        let entryObject = {
          target: entry.target.id,
          visible: entry.isIntersecting,
          index: index
        }

        console.log('AAA', index);
        console.log(entry.target.id);
        
        // console.log('IMPORT', links[index])
         if ((entry.target.id == links[index]) && entry.isIntersecting === true ) {
           // refs[index].classList.toggle('hello')
           // console.log('working' + index)
           // headingRef.current.classList.add('hello')
           headingRef.current.children[index].classList.toggle('visible', entry.isIntersecting);
           headingRef.current.children[index].style.color = "#4d4d4d";
           
          } else{
            headingRef.current.children[index].style.color = "#8f8f8f";
            setCounter(counter - 1);
          }
          
          
        if(entry.isIntersecting === true){
          setCounter(counter + 1);
         } else{
          setCounter(counter - 1);
         }
        ///index -1
        console.log('entryobject', entryObject);
        // setIsVisible(entry.isIntersecting)
        // // console.log('id', entry.target.id);
        // setFocus(entry.target.href);

        //tocHeader0 
        
        //set active class here
        //next sibling
        //if next sibling is visible, set current active to that sibling.


        //if(href === visibleId) link.classList.add('is-active')

        //store entry.target.href and entry.isIntersecting in object
      })
    })
    refs.forEach((element, index) => {
      observer.observe(element);
      element.elems_index = index;
    });
  }, [refs, links])

  useEffect(() => {
    console.log('counter', counter)
    // console.log('focus is', focus);
    // console.log('heading is', refs);
  }, [counter])
  
  
  
  const components = {
   
  };
  // console.log(getHeadings())
  // const contentString = renderToString(mdxSource);

  // const getHeadings = (source) => {
  //   const regex = /<h2>(.*?)<\/h2>/g;

  //   if (source.match(regex)) {
  //     return source.match(regex).map((heading) => {
  //       const headingText = heading.replace("<h2>", "").replace("</h2>", "");

  //       const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

  //       return {
  //         text: headingText,
  //         link,
  //       };
  //     });
  //   }

  //   return [];
  // };

  // const headings = getHeadings(contentString);

  return(
    <div>
      <Layout>
        <main className={styles.container}>
          <section className={styles.contents}>
            <div className={styles.header}>
              <div className={styles.banner}>
                
                <Details category={category} date={date}/>
                <h1>{title}</h1>
                <h3>{description}</h3>
              </div>
            </div>
            <img src={thumbnailUrl}/>
            <div className={styles.markdown}>
              <div className={styles.top}>
                <aside className={styles.toc}>
                  <div className={styles.headings}>
                    <p>Summary</p>
                    <div className={styles.row} ref={headingRef}>
                      {
                        headings.map((heading, index) => (
                          
                            <Link href={'#' + links[index]}> 
                              <a href={'#'+ links[index]} className={styles.title} onClick={() => console.log(refs[index].id)}>
                                {heading}

                              </a>
                            </Link>
                          
                          
                        ))
                      }
                    </div>
                  </div>
                </aside>    
              </div>
              <div className={styles.mdx}>
                  <div>
                    <MDXRemote {...mdxSource} components={components}>
                      {mdxSource}
                    </MDXRemote>
                  </div>
                
              </div>        
              
            </div>
            
          </section>
        </main>
      
      </Layout>
    </div>
   
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(file => ({
    params: {
      slug: file.replace('.mdx', '')
    }
  }))

  return {
    paths, 
    fallback: false
  }
}

export const getStaticProps = async({ params: { slug } }) => {
  const fileData = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(fileData);

  const mdxSource = await serialize(content, options);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export default PostFile;