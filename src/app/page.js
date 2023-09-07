import CardFilme from '@/components/CardFilm'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'

const filmes =
  [
    {
      titulo: "Bezouro Azul",
      nota: 9.0,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/AhmVkXerBVsuI6PejPeqaaW2wwT.jpg"
    },
    {
      titulo: "Elementos",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/cfXO8gMTz484ItS0AANhGS4v4b5.jpg"
    },
    {
      titulo: "Outro",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/cfXO8gMTz484ItS0AANhGS4v4b5.jpg"
    },
    {
      titulo: "Barbie",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ];
  
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="m-2">

        <Title>Filmes em alta</Title>
        
        <section className="flex flex-wrap gap-3">
          {filmes.map( filme => <CardFilme filme={filme} />)}
        </section>

        <Title>Séries em alta</Title>
        <Title>Lançamentos</Title>
      </main>
    </>
  )
}
