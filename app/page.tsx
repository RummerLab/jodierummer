import Image from 'next/image'

export default function Home() {

  /*const Map = useMemo(() => dynamic(
    () => import('../components/Leaflet'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])*///<Map />

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
