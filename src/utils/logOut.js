export const logOut = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('user')
	
}
