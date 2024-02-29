import { useState } from 'react';
import AddCoderForm from './AddCoderForm';

import {useQuery, gql} from '@apollo/client'


const CODERS_QUERY = gql `
query Query {
  coders{
    activities
    description
    id
    name
  }
}
`;

function App() {
  const [count, setCount] = useState(0)
  const {loading, error, data} = useQuery(CODERS_QUERY);
  if(loading) return 'Loading...';
  if(error) return 'Error: ${error.message}'
  return <>{JSON.stringify(data) } 
  {
    data.coders.map(coder => <div key={coder.id}> {coder.name}</div>)
  }
  <AddCoderForm />
  </>
}

export default App
