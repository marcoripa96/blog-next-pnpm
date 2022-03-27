import { FC } from "react";

const BlogLayout: FC<any> = ({ children, meta }) => {
  console.log(meta)
  return (
    <div style={{ margin: '0 100px' }}>
      {children}
    </div>
  )
}

export default BlogLayout;