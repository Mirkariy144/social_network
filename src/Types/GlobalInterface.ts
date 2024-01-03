export interface UserInfoType {
	aboutMe: string;
	contacts: UserContactsType
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: {
		small: string;
		large: string;
	} | null;
}

export interface UserContactsType {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}

export interface PostsType extends Array<{id: number; text: string}> {

}

export interface MessagesType {
	id: number;
	text: string;
}