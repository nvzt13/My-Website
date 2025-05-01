import SingleServicePage from './HizmetClient'

type PageProps = {
  params: {
    hizmetId: string
  }
}

const Page = ({ params }: PageProps) => {
  return (
    <div>
      <SingleServicePage hizmetId={params.hizmetId} />
    </div>
  )
}

export default Page
