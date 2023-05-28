import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactUs, Footer, Hero, Spotlight } from './features';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Hero
        heroImage='/hero.jpg'
        companyName='Timepiece Haven'
        heading='Timepiece Haven'
        body='Timeless Elegance, Captured in Every Tick'
      />
      <Spotlight
        title='Discover Timepieces That Transcend Ordinary'
        features={[
          {
            title: 'Eternal Classic',
            body: `Immerse yourself in the timeless allure of our "Eternal Classic" timepiece. With its sleek stainless steel case, elegant Roman numerals, and a luxurious leather strap, this watch exudes sophistication and refinement. Experience the perfect fusion of tradition and modernity, making it an essential accessory for every occasion.`,
            image: '/features/1.jpg',
          },
          {
            title: 'Sleek Sophistication',
            body: `Elevate your style with the understated elegance of our "Sleek Sophistication" watch. Its minimalist design, featuring a slim profile, a minimalist dial, and a polished stainless steel bracelet, exudes a sense of refined simplicity. Embrace the art of understatement while making a statement of impeccable taste with this captivating timepiece.`,
            image: '/features/2.jpg',
          },
          {
            title: `Adventurer's Companion`,
            body: `Designed for the daring souls and adventurous spirits, our "Adventurer's Companion" watch combines rugged durability with exceptional functionality. Its robust stainless steel case, luminescent hands, and water-resistant construction ensure reliability in any environment. With this timepiece, embrace every journey with confidence, knowing you have a reliable companion on your wrist.`,
            image: '/features/3.jpg',
          },
        ]}
      />
      <ContactUs />
      <Footer
        facebook='facebook'
        companyName='Company'
        headline='headline'
        twitter='twitter'
        youtube='youtube'
      />
    </QueryClientProvider>
  );
}

export default App;
