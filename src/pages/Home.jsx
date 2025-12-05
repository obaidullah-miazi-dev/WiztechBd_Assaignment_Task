import SidebarFilters from "../components/SidebarFilters";

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:sticky lg:top-24 h-fit">
              <SidebarFilters />
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;