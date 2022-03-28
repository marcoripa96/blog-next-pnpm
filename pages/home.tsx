import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

import styles from 'styles/home.module.css'

import clsx from 'clsx'

const Home = ({ posts }: any) => {
  return (
    <div className="mt-5">
      {posts.map((post: any, index: any) => (
        <Link href={'/posts/' + post.slug} passHref key={index}>
          <div className={clsx(styles.card, 'mb-3', 'pointer')} style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('pages/posts'))
  
  
  const posts = await Promise.all(files.map(async (filename: string) => {

    const post = await import('pages/posts/' + filename)
    //const post = await import(path.join('pages/posts', filename));
    //const { data: frontMatter } = matter(markdownWithMeta)
    //console.log(frontMatter)
    return {
      ...post.meta,
      slug: filename.split('.')[0]
    }
  }));


  console.log(posts)
  return {
    props: {
      posts
    }
  }
}

export default Home
