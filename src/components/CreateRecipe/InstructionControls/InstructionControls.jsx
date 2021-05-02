import React from 'react';
import PropTypes from 'prop-types';
import Control from '../../UI/Control/Control';
import classes from './InstructionControls.module.css';

const InstructionControls = ({ instructions, deleteInstruction }) => (
	<>
		{ instructions ? (
			instructions.map((instruction, index) => (
				<Control key={instruction.id} label={instruction.content}>
					<button type="button" className={classes.Edit}>
						Edit
					</button>
					<button type="button" className={classes.Delete} onClick={() => deleteInstruction(index)}>
						Delete
					</button>

				</Control>
			)))
			: null}
	</>
);

InstructionControls.propTypes = {
	instructions: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		content: PropTypes.string,
	})).isRequired,
	deleteInstruction: PropTypes.func.isRequired,
};

export default InstructionControls;
