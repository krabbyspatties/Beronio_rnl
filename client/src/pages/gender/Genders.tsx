import { useState } from "react";
import AlertMessage from "../../components/AlertMessage";
import GendersTable from "../../components/tables/gender/GendersTable";
import MainLayout from "../layout/MainLayout";
import AddGendersForm from "../../components/forms/gender/AddGenderForm";

const Genders = () => {
  const [refreshGender, setRefreshGender] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowAlertMessage = (
    message: string,
    isSuccess: boolean,
    isVisible: boolean
  ) => {
    setMessage(message);
    setIsSuccess(isSuccess);
    setIsVisible(isVisible);
  };

  const handleCloseAlertMessage = () => {
    setMessage("");
    setIsSuccess(false);
    setIsVisible(false);
  };
  const content = (
    <>
      <AlertMessage
        message={message}
        isSuccess={isSuccess}
        isVisible={isVisible}
        onClose={handleCloseAlertMessage}
      />
      <div className="row">
        <div className="col-md-4">
          <AddGendersForm
            onGenderAdded={(message) => {
              handleShowAlertMessage(message, true, true);
              setRefreshGender(!refreshGender);
            }}
          />
        </div>
        <div className="col-md-8">
          <GendersTable refreshGenders={refreshGender} />
        </div>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default Genders;
