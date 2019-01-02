class Github{
	constructor(){
		this.client_id='d9308aacf8b204d361fd';
		this.client_secrate='84969aeef73956f4ec9e8716d1840532802bb81b';
	}
    
    async myUser(){
		   const profileResponse=await fetch(`https://api.github.com/users?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		   const profile=await profileResponse.json();
		   return{
		   	profile:profile
		   }
	}


	async getUserfromgithub(user){
		const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile=await profileResponse.json();
		return{
			profile:profile
		}
	}
	// async myUser(users){
	// 	   const profileResponse=await fetch(`https://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
	// 	   const profile=await profileResponse.json();
	// 	   return{
	// 	   	profile:profile
	// 	   }
	// }
}