import { useAppContext } from "../context/AppContext";
const Categories = () => {
  const { setCategories } = useAppContext();
  const handelChange = (e) => {
    setCategories((prev) => [e.target.value, ...prev]);
    console.log(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="font-medium p-24 flex justify-center ">
        <div>
          <h2 className="text-2xl">Add Categories</h2>
          <br></br>
          <form  onSubmit={handelSubmit}>
            <label className="form-control">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs "
                name="category"
                onChange={handelChange}
              />{" "}
              <button
               
                type="submit"
                className="btn btn-active btn-accent"
              >
                Save
              </button>
            </label>
            {/* <ul>

            </ul> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Categories;
