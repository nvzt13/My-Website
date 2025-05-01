
import BlogClient from './BlogClient'

interface Params {
    params : {
        id: string
    }
}
const Page = async ({ params }: { params: Promise<Params> }) => {
    const  resolveParams = await params;
    const { id } = resolveParams.params
    return (
    <div>
        <BlogClient id={id}/>
    </div>
  )
}

export default Page