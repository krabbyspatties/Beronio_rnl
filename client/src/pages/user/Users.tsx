import { useState } from "react";
import AddUserModal from "../../components/modals/user/AddUserModal";
import MainLayout from "../layout/MainLayout";
import UsersTable from "../../components/tables/user/UsersTable";
import EditUserModal from "../../components/modals/user/EditUserModal";
import type { Users } from "../../interfaces/Users";
import DeleteUserModal from "../../components/modals/user/DeleteUserModal";
import ShowUserModal from "../../components/modals/user/ShowUserModal";

const Users = () => {
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openShowUserModal, setOpenShowUserModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  const handleOpenShowUserModal = (user: Users) => {
    setSelectedUser(user);
    setOpenShowUserModal(true);
  };

  const handleCloseShowUserModal = () => {
    setSelectedUser(null);
    setOpenShowUserModal(false);
  };

  const handleOpenEditUserModal = (user: Users) => {
    setSelectedUser(user);
    setOpenEditUserModal(true);
  };

  const handleCloseEditUserModal = () => {
    setSelectedUser(null);
    setOpenEditUserModal(false);
  };

  const handleOpenDeleteUserModal = (user: Users) => {
    setSelectedUser(user);
    setOpenDeleteUserModal(true);
  };

  const handleCloseDeleteUserModal = () => {
    setSelectedUser(null);
    setOpenDeleteUserModal(false);
  };

  const content = (
    <>
      <ShowUserModal
        showModal={openShowUserModal}
        user={selectedUser}
        onClose={handleCloseShowUserModal}
      />
      <AddUserModal
        showModal={openAddUserModal}
        onRefreshUsers={() => setRefreshUsers(!refreshUsers)}
        onClose={() => setOpenAddUserModal(false)}
      />

      <EditUserModal
        showModal={openEditUserModal}
        user={selectedUser}
        onClose={handleCloseEditUserModal}
        onRefreshUsers={() => setRefreshUsers(!refreshUsers)}
      />
      <DeleteUserModal
        showModal={openDeleteUserModal}
        user={selectedUser}
        onRefreshUsers={() => setRefreshUsers(!refreshUsers)}
        onClose={handleCloseDeleteUserModal}
      />
      <div className="d-flex justify-content-end mt-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setOpenAddUserModal(true)}
        >
          Add User
        </button>
      </div>
      <UsersTable
        refreshUsers={refreshUsers}
        onShowUser={handleOpenShowUserModal}
        onEditUser={handleOpenEditUserModal}
        onDeleteUser={(user) => {
          handleOpenDeleteUserModal(user);
        }}
      />
    </>
  );

  return <MainLayout content={content} />;
};

export default Users;
