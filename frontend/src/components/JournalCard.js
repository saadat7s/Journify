import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import EditEntryModal from './EditEntryModal';

const JournalCard = ({ id, title, content, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-3 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-content">{content.substring(0, 100)}...</p>
          <div className="card-buttons">
            <button className="btn btn-primary" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i> Update
            </button>
            <button className="btn btn-danger ms-2" onClick={(e) => onDelete(id)}>
              <i className="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EditEntryModal id={id} title={title} content={content} showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default JournalCard;
