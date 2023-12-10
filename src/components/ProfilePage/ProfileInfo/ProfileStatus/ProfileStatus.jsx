import React, { useEffect, useState } from "react";

export const ProfileStatus = ({
	confirmStatusChanges, 
	cancelStatusChanges, 
	editMode, 
	status, 
	setEditMode}) => {

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if (editMode) {
			setInputValue(status);
		} else {
			setInputValue('');
		}
	}, [editMode, status])

	const eventListener = (e) => {
		if (e.key === 'Enter') {
			confirmStatusChanges(inputValue);
		} else if (e.key === 'Escape') {
			cancelStatusChanges();
		}
	}

	return (
		<>
			{!editMode
				?(
				<span onDoubleClick={() => setEditMode(true)}>
					{status?status:'Show your status here'}
				</span>
				):(
				<input type="text" autoFocus={true} 
				onBlur={() => confirmStatusChanges(inputValue)} 
				onChange={(e) => {setInputValue(e.target.value)}} 
				value={inputValue} 
				onKeyDown={(e) => eventListener(e)}></input>
				)}
		</>
  );
};