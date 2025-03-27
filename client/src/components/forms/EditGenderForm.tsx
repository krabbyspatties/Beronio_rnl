import { Link } from "react-router-dom";

const EditGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <form action="submit" method="post">
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Edit Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value="Male"
              />
            </div>
            <div className="d-flex justify-content-end gap-2">
              <Link to={"/"} className="btn btn-secondary">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditGenderForm;
