import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Card from './Card';
import './Main.css';

function Main({ cards }) {
  return (
    <main className='content'>
      <section className='cards'>
        <div className='surface-0 text-center'>
          <div className='mb-3 font-bold text-2xl'>
            <span className='text-blue-600'>For those who like tasty beer</span>
          </div>
        </div>
        <ul className='card'>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
