import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from '../../store/modal/actionCreators';

const mapStateToProps = (state) => ({
    modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(closeModal())
});


const ModalProvider = ({ modal, onClose }) => {
    return (
        <Modal
            onClose={onClose}
            open={modal.isOpen}>
            <div
                className={modal.style}>
                {modal.header}
                {modal.content}
            </div>
        </Modal>
    );
};

ModalProvider.propTypes = {
    modal: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProvider);
