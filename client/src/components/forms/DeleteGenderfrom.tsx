import { Link } from "react-router-dom";

const DeleteGenderfrom = () => {
  return (
    <>
      <div className="form-group">
        <div className="alert alert-danger">
          <p>
            Are you sure you want to delete the gender <strong>Male?</strong>?
          </p>
          <div className="d-flex justify-content-end gap-2">
            <Link to={"/"} className="btn btn-secondary me-1">
              Cancel
            </Link>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderfrom;
