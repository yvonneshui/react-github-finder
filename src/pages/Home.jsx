import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
function Home() {
	return (
		<div>
			{/*search components will be here*/}
			<UserSearch />
			<UserResults />
		</div>
	)
}

export default Home