const mygithub=new Github();
const totalUser=[];
mygithub.myUser()
.then(user=> 
	{
		//const totalUser=user.profile;
		user.profile.forEach(function(logindata){
			totalUser.push(logindata.login);
		})
	});

// console.log(totalUser);
const gettotalUserdata=getUserData(totalUser);

document.getElementById('next').addEventListener('click',getProfile);

function getProfile(){
	const getprofileuserdata=gettotalUserdata.next().value;
	mygithub.getUserfromgithub(getprofileuserdata)
	.then(user=>{
		const responsefromGithub=user.profile;
		document.getElementById('profileDisplay').innerHTML=`
		<ul class="list-group">
		<li class="list-group-item">Name:${responsefromGithub.name}</li>
		<li class="list-group-item">Bio:${responsefromGithub.bio}</li>
		<li class="list-group-item">Bio:${responsefromGithub.company}</li>
		<li class="list-group-item">Login name : ${responsefromGithub.login}</li>
		<li class="list-group-item">His followers are :<span class="badge badge-primary badge-pill">${responsefromGithub.followers}</span> and he is following : <span class="badge badge-primary badge-pill">${responsefromGithub.following}</span>users</li>
		<li class="list-group-item">Location:${responsefromGithub.location}</li>
		<li class="list-group-item">Public Gists :<span class="badge badge-primary badge-pill">${responsefromGithub.public_gists}</span> Public Repos: <span class="badge badge-primary badge-pill">${responsefromGithub.public_repos}</span></li> 
		</ul>`;
		document.getElementById('imageDisplay').innerHTML=`<img src="${responsefromGithub.avatar_url}">`;
		console.log(user.profile);
	})
	console.log(getprofileuserdata);
	//mygithub.getUserfromgithub()

}



function getUserData(profiles){
	let nextIndex=0;
	return{
		next:function(){
			return nextIndex<profiles.length?
			{
				value:profiles[nextIndex++],nextIterator:false
			}:
			{nextIterator:true}
		}

	}
}

