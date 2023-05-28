import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactUs } from './features';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ContactUs />
    </QueryClientProvider>
  );
}

export default App;
