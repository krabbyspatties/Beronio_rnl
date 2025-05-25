import React from "react";
import type { Users } from "../../../interfaces/Users"; // adjust this path if needed

interface ShowUserModalProps {
  showModal: boolean;
  user: Users | null;
  onClose: () => void;
}

const ShowUserModal = ({ showModal, user, onClose }: ShowUserModalProps) => {
  if (!showModal || !user) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Details</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <div>
              <strong>Name:</strong>
            </div>
            <div>
              <strong>Email:</strong>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUserModal;
