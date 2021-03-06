import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

const Home = ({ posts }: any) => {
  return (
    <div className="mt-5">
      {/* {posts.map((post: any, index: any) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.frontMatter.thumbnailUrl}
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
      ))} */}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('pages/posts'))
  
  
  const posts = files.map(async filename => {

    const post = await import('pages/posts/' + filename)
    //const post = await import(path.join('pages/posts', filename));
    console.log(post.meta)
    //const { data: frontMatter } = matter(markdownWithMeta)
    //console.log(frontMatter)
    return {
      //frontMatter,
      slug: filename.split('.')[0]
    }
  })


  return {
    props: {
      //posts
    }
  }
}

export default Home
