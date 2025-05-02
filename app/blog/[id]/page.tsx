
import BlogClient from './BlogClient'

interface Params {
        id: string
}
const Page = async ({ params }: { params: Promise<Params> }) => {
    const  resolveParams = await params;
    const { id } = resolveParams
    return (
    <div>
        <BlogClient id={id}/>
    </div>
  )
}

export default Page