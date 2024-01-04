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

export interface UserType {
	name: string,
	id: number,
	status: string | null,
	photos: {
		small: string | null,
		large: string | null
	},
	 followed: boolean
}

export interface PostType {
		id: number;
		text: string;
	}
 export type PostsType = PostType[]

export interface MessagesType {
	id: number;
	text: string;
}