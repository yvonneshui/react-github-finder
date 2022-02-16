import {useEffect,useState} from 'react'
import Spinner from '../layout/Spinner'
function UserResults() {
	const [users,setUsers]=useState([])//changes user data
	const[loading,setLoading]=useState(true)
	useEffect(()=>{
		fetchUsers()
	},[])//runs every render

	const fetchUsers=async()=>{
		const res=await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
			headers:{
			},
		})
		const data= await res.json()
		setUsers(data);
		setLoading(false)
	}

	return loading?<Spinner />:(
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{users.map((user,key)=>(
				<h3>{user.login}</h3>
			))}
		</div>
	)
}

export default UserResults