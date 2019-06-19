  import AppInstagram  from './tasks/AppInstagram.vue';
  import ExmTwitter  from './tasks/ExmTwitter.vue';
  // import ExmVk  from './tasks/ExmVk.vue';
  import Signup from './view/Signup.vue';
  import Login from './view/Login.vue';
  import Tasks  from './view/Tasks.vue';
  import Task  from './view/Task.vue';


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
      path: '/ins',
      component: AppInstagram,
      name: 'app-instagram'
    },
  	
    {
      path: '/tasks',
      component: Tasks,
      name: 'tasks',
      children: [
        {
            path: "/instag",
            name: "instagram",
            component: AppInstagram
        }
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