import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Genders from "../../interfaces/Genders";
import GenderServices from "../../services/GenderServices";
import ErrorHandler from "../../handler/ErrorHandler";
import Spinner from "../Spinner";

interface GendersTableProps {
  refreshGenders: boolean;
}

const GendersTable = ({ refreshGenders }: GendersTableProps) => {
  const [state, setState] = useState({
    loadingGender: true,
    genders: [] as Genders[],
  });

  const handleLoadGenders = () => {
    GenderServices.loadGenders()
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            genders: res.data.genders,
          }));
        } else {
          console.error("Unexpected status error during loading genders");
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingGender: false,
        }));
      });
  };

  useEffect(() => {
    handleLoadGenders();
  }, [refreshGenders]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loadingGender ? (
            <tr className="align-middle">
              <td colSpan={3} className="text-center"></td>
              <Spinner />
            </tr>
          ) : (
            state.genders.map((gender, index) => (
              <tr className="align-middle" key={index}>
                <td>{index + 1}</td>
                <td>{gender.gender}</td>
                <td>
                  <div className="btn-group">
                    <Link to={"gender/edit"} className="btn btn-success">
                      Edit
                    </Link>
                    <Link to={"/gender/delete"} className="btn btn-danger">
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
