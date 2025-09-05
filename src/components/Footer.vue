<template>
  <footer class="footer p-2">
    <div class="contain">
      <div class="footer__content">
        <div class="footer__copyright">
          <span
            >©2025 by SunFlex (Cambodia) Co.,Ltd<br />Best viewed with IE 9+,
            Firefox 16+, Safari 5.1, Chrome 23+.</span
          >
        </div>
        <nav class="footer__nav">
          <ul class="footer__menu">
            <li class="menu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/about-us" exact>About Us</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/career" exact>Career</router-link>
            </li>
          </ul>
        </nav>
        <div class="footer__brand">
          <b>SunFlex</b>
        </div>
      </div>
      <a class="footer__scroll" @click="scrollToTop">
        <img
          src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
          alt="scroll-up"
          title="scroll-up"
        />
      </a>
    </div>
    <div class="footer__mobile">
      <a class="footer__scroll" @click="scrollToTop">
        <img
          src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
          alt="scroll-up"
          title="scroll-up"
        />
      </a>
      <ul class="footer__social">
        <li>
          <a href="javascript:void(0);">
            <img
              src="https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=750&format=png&optimize=medium"
              alt="linkedin"
              title="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img
              src="https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=750&format=png&optimize=medium"
              alt="twitter"
              title="twitter"
            />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img
              src="https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=750&format=png&optimize=medium"
              alt="facebook"
              title="facebook"
            />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img
              src="https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=750&format=png&optimize=medium"
              alt="youtube"
              title="youtube"
            />
          </a>
        </li>
      </ul>
      <p>© SunFlex (Cambodia) Co.,Ltd, 2025</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* Copy the footer styles from Home.vue or AboutUs.vue */
.footer {
  background: #003087;
  color: white;
  padding: 10px;
}

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.footer__menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__menu li {
  margin: 5px 0;
}

.footer__menu a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px;
}

.footer__menu a.router-link-active,
.footer__menu a.router-link-exact-active {
  color: #4caf50;
  font-weight: bold;
}

.footer__brand b {
  font-size: 1.8rem;
}

.footer__scroll img {
  width: 40px;
}

.footer__mobile {
  display: none;
}

.footer__social {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}

.footer__social img {
  width: 30px;
  margin: 0 10px;
}

@media (min-width: 769px) {
  .footer__content {
    flex-direction: row;
    text-align: left;
  }
  .footer__menu {
    flex-direction: row;
  }
  .footer__menu li {
    margin: 0 10px;
  }
  .footer__scroll {
    display: none;
  }
  .footer__mobile {
    display: none;
  }
}
</style>
