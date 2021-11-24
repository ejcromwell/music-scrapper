import WebsiteForm from './WebsiteForm.jsx';

function WebsiteSelection({formData}) {

  return (
    <>
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
        Add URL Here
      </h2>
      <p className="mt-5 text-xl text-gray-400">
        Add the URL for the website you want to pull the tracklist from.
      </p>
      <div className="mt-12">
        <WebsiteForm formData={formData} />
      </div>
    </>
  );
}

export default WebsiteSelection;
