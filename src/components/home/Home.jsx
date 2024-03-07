import { HomeContainer } from './HomeStyles';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>Phonebook</h2>
      <p>
        In order to use your phonebook please create your account or log in.
      </p>
    </HomeContainer>
  );
}
