import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Dr Jodie Rummer - Marine Biologist, TEDx Speaker, and Fish Friend",
  description: '',
}

export default function Home() {

  /*const Map = useMemo(() => dynamic(
    () => import('../components/Leaflet'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])*///<Map />

  return (
    <>
      <p>Watch my TEDx talk: Athletes of the Great Barrier Reef</p>

      <p>With over 400 million years of evolution, the fishes represent one of the most successful adaptive radiation events in vertebrate history.Yet, we do not fully understand how fish are responding to environmental and human - induced stress and their capacity to adapt to global climate change, which is the focus of my research.</p>

      <p><Link href="/about">About Me</Link></p>

      <p>Research</p>

      <p>Publications</p>

      <p><Link href="/women-in-science">Women in Science</Link></p>

    </>
  )
}
