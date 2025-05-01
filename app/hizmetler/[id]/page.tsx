import SingleServicePage from './HizmetClient'

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
      <SingleServicePage id={id} />
    </div>
  )
}

export default Page
