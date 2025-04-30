import SingleServicePage from './HizmetClient'

type PageProps = {
  params: {
    hizmetId: string
  }
}

const Page = ({ params }: PageProps) => {
  console.log('hizmetId', params.hizmetId)

  return (
    <div>
      <SingleServicePage hizmetId={params.hizmetId} />
    </div>
  )
}

export default Page
