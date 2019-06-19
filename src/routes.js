  import TaskInstagram  from './tasks/TaskInstagram.vue';
  import TaskYoutube  from './tasks/TaskYoutube.vue';
  import ExmTwitter  from './tasks/ExmTwitter.vue';
	// import ExmVk  from './tasks/ExmVk.vue';
  import Signup from './view/Signup.vue';
	import Login from './view/Login.vue';
	import AppDashboard from './view/AppDashboard.vue';
  import Tasks  from './view/Tasks.vue';
	import Task  from './view/Task.vue'



  export const routes = [
  
    {
  		path:'/signup',
  		component:Signup,
  	  name:'signup'
    },
    {
  		path: '/login',
  		component: Login,
  		name: 'login'
		},
    {
  		path: '/dash',
  		component: AppDashboard,
			name: 'dashboard',
			children: [
					{
						path: '/tasks',
						component: Tasks,
						name: 'tasks',
						children: [
							{
									path: "/instag",
									name: "instagram",
									component: TaskInstagram
							},
							{
								path: "/yotube",
								name: "instagram",
								component: TaskYoutube
						},
						]
					},
				]
		},
		
   
    {
      path: '/task/:id',
      component: Task,
      props: true,
      name: 'task'
    },
    {
      path: '/twitter',
      component: ExmTwitter,
      name: 'twitter'
    },
  	{
  		path: '*',
  		component: ExmTwitter
  	}
  ]