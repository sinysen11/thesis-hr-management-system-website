import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/DefaultLayout.vue';
import Login from '@/views/login';
import SignUp from '@/views/signUp';
import ForgotPassword from '@/views/forgot_password';
import ResetPassword from '@/views/reset_password';
import Home from '@/views/home/index.vue';
import Career from '@/views/Jobs';
import JobDetails from '@/views/Jobs/components/JobDetails.vue';
import AboutUs from '@/views/aboutUs';
import Applicant from '@/views/applicants';
import ProductDetail from '@/components/ProductDetail.vue';

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
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/website/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Dashboard', component: Home },
      { path: '/career', name: 'Career', component: Career },
      { path: '/career/job-detail', name: 'JobDetail', component: JobDetails },
      { path: '/about-us', name: 'AboutUs', component: AboutUs },
      { path: '/career/applicant', name: 'Applicant', component: Applicant },
      { path: '/products/:slug', component: ProductDetail, name: 'ProductDetail', props: true }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;