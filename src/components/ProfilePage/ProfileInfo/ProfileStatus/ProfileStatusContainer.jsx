import React, { useState } from "react";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileStatusContainer = () => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState('')

	const confirmStatusChanges = (inputValue) => {
		setStatus(inputValue)
		setEditMode(false)
	}

	const cancelStatusChanges = () => {
		setEditMode(false)
	}

	return (
		<ProfileStatus 
		confirmStatusChanges={confirmStatusChanges}
		cancelStatusChanges={cancelStatusChanges}
		editMode={editMode} 
		status={status} 
		setEditMode={setEditMode}/>
	)
}