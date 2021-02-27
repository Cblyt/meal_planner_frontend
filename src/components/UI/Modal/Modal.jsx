import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = ({ show, children, modalClosed }) => (
	<>
		<Backdrop show={show} clicked={modalClosed} />
		<div
			className={classes.Modal}
			style={{
				transform: show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: show ? '1' : '0',
			}}
		>
			{children}
		</div>
	</>
);

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	modalClosed: PropTypes.func.isRequired,
};

export default Modal;
