import { writable } from 'svelte/store';

export const FriendsStore = writable([
	{
		username: 'Reza Banankhah',
        id: 'rezab',
		picture: 'mdi:user'
	},
	{
		username: 'Dylan Pham',
        id: 'dpham',
		picture: 'mdi:user'
	},
    {
		username: 'George Danzelaud',
        id: 'gdanz',
		picture: 'mdi:user'
	}
]);

export const CommunityStore = writable([
	{
		name: 'USCord',
        id: 'usc',
		logo: 'mdi:school'
	},
    {
		name: 'Gaming Group',
        id: 'games',
		logo: 'mdi:controller'
	},
    {
		name: 'USC Chess Club',
        id: 'chess',
		logo: 'mdi:chess-king'
	},
	
]);
