
import BlogClient from './BlogClient'

interface Params {
    params : {
        blogId: string
    }
}
const Page = ({params}: Params) => {
    return (
    <div>
        <BlogClient id={params.blogId}/>
    </div>
  )
}

export default Page