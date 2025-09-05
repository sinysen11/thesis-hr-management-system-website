import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import Login from '@/views/login';
import SignUp from '@/views/signUp';
import Home from '@/views/home/index.vue';
import Career from '@/views/Jobs';
import JobDetails from '@/views/Jobs/components/JobDetails.vue';
import AboutUs from '@/views/aboutUs';
import Applicant from '@/views/applicants';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Dashboard', component: Home },
      { path: '/career', name: 'Career', component: Career },
      { path: '/career/job-detail', name: 'JobDetail', component: JobDetails },
      { path: '/about-us', name: 'AboutUs', component: AboutUs },
      { path: '/career/applicant', name: 'Applicant', component: Applicant }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;