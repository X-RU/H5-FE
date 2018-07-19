import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Release from '@/components/Release'
import Enroll from '@/components/Enroll'
import Manager from '@/components/Manager'
import Photos from '@/components/Photos'
import Profile from '@/components/Profile'
import Members from '@/components/Members'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		// {
		// 	path: '/index',
		// 	name: 'Home',
		// 	component: Home
		// },
		{
			path: '/release',
			name: 'Release',
			component: Release
		},
		{
			path: '/project',
			name: 'Enroll',
			component: Enroll
		},
		{
			path: '/manager',
			name: 'Manager',
			component: Manager

		},
		{
			path: '/photos',
			name: 'Photos',
			component: Photos
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/members',
			name: 'Members',
			component: Members
		},
	]
})
