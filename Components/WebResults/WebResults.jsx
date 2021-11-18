import ResultsTable from './ResultsTable.jsx';
import Header from './Header.jsx';

function WebResults({results}) {
  return (
    <div className="pb-24">
      <Header />
      <div className="container m-auto">
        <ResultsTable results={results}/>
      </div>
    </div>
  );
}

export default WebResults;
