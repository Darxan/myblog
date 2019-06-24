  import TaskInstagram  from './tasks/TaskInstagram.vue';
  import TaskYoutube  from './tasks/TaskYoutube.vue';
  import TaskTwitter  from './tasks/TaskTwitter.vue';
  import TaskVkontakte  from './tasks/TaskVkontakte.vue';
  import TaskFacebook  from './tasks/TaskFacebook.vue';
  import Signup from './view/Signup.vue';
  import Login from './view/Login.vue';
  import AppDashboard from './view/AppDashboard.vue';
  import Tasks  from './view/Tasks.vue';
  import Task  from './view/Task.vue'
  import TaskAdd  from './tasks/TaskAdd.vue'
  import AddNewTasksFaAll  from './tasks/newtaskadd/AddNewTasksFaAll.vue'



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
								path: "/youtube",
								name: "instagram",
								component: TaskYoutube
							},
							{
								path: "/facebook",
								name: "facebook",
								component: TaskFacebook
							},
							{
								path: "/vk",
								name: "vkontakte",
								component: TaskVkontakte
							},
							{
								path: "/twitter",
								name: "twitter",
								component: TaskTwitter
							},
							
						]
					},
					{
						path: "/add",
						name: "taskadd",
						component: TaskAdd,
								
					},
					{
						path: '/facebook/all',
						name: 'facebookall',
						component: AddNewTasksFaAll
					}
				]
   },
    {
      path: '/task/:id',
      component: Task,
      props: true,
      name: 'task'
    },
    { path: '*', component: AppDashboard }
  ]