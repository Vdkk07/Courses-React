import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);

      let output = await response.json();

      //! save data in variable
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong!!");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex flex-col bg-[#435384] ">
      <div>
        <Navbar></Navbar>
      </div>

      <div > 
        <div>
          <Filter 
          filterData={filterData} 
          category={category}
          setCategory={setCategory}
          ></Filter>
        </div>

        <div className="w-11/12 flex flex-wrap max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
}

export default App;
