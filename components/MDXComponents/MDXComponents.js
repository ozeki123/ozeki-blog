const Heading2 = ({ mdxSource }) => {
  const id = mdxSource.replace(/ /g, "_").toLowerCase();

  return <h2 id={id}>{mdxSource}</h2>
};

const MDXComponents = {
  h2: Heading2
};

export default MDXComponents;