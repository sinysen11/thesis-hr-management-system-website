<template>
  <div class="home-container">
    <section class="relative w-full overflow-hidden mb-10">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <picture>
            <source media="(max-width: 768px)" :srcset="slide.mobileSrc" />
            <img
              :src="slide.desktopSrc"
              :alt="slide.alt"
              class="w-full h-auto max-h-[500px] object-cover"
            />
          </picture>
        </div>
      </div>

      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="{
            'bg-white ring-2 ring-blue-500': currentIndex === index,
            'bg-gray-400': currentIndex !== index
          }"
          :aria-label="'Go to slide ' + (index + 1)"
        ></button>
      </div>
    </section>

    <section class="bluemenu">
      <div class="contain">
        <nav class="bluemenu__nav">
          <ul class="bluemenu__list">
            <li class="menu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/#it-infrastructure"
                >IT Infrastructure</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#networking-data-analytics"
                >Networking Data Analytics</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#cloud-solutions">Cloud Solutions</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/#big-data"
                >Big Data, Data Warehouse</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#digital-banking"
                >Digital Banking Solutions</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#security-solutions"
                >Security Solutions</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#professional-services"
                >Professional Service Support</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <main class="content">
      <section class="intro contain">
        <h1>Product</h1>
        <h2>Welcome to <strong>SunFlex (Cambodia) Co.,Ltd</strong>.</h2>
        <p>
          SunFlex provides consistent processes and tools combined with the
          right skills at the right time and place. We design IT solutions that
          fit your unique requirements with a complete breadth of distributed IT
          solutions.
        </p>
        <p>
          Drawing on deep industry expertise and customize solutions, we blend
          strategic designs, using proven IT technologies, and world class
          service and support capability to create effective solutions that
          remove cost and complexity to maximize your returns on IT investment.
        </p>
        <p>
          With over decade of industry experience, our solutions are built on
          innovation, expertise, independence, and flexibility.
        </p>
      </section>

      <section class="features contain">
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="digital acceleration"
          />
          <h4>Private <strong>Cloud</strong></h4>
          <p>Control and Flexibility, Security<br />Resource Availability.</p>
        </div>
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Digital Banking"
          />
          <h4>Open <strong>Banking API</strong></h4>
          <p>
            Prepare to comply. Prepare to complete.<br />60+ APIs available.
          </p>
        </div>
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Digital Channels"
          />
          <h4>Big <strong>Data</strong></h4>
          <p>
            Cost Savings, Time Reductions,<br />Understand the market
            conditions.
          </p>
        </div>
      </section>

      <section class="features contain">
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="realtime"
          />
          <h4>ATM <strong>Machine</strong></h4>
          <p>24/7 banking services</p>
        </div>
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Joined up Banking"
          />
          <h4>Penetration <strong>Testing</strong></h4>
          <p>Detect and arrange security threats.</p>
        </div>
        <div class="feature-card">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="tomorrow challenges"
          />
          <h4><strong>Professional Service</strong> Support</h4>
          <p>24/7 Remote and Onsite Support.</p>
        </div>
      </section>

      <section id="it-infrastructure" class="section contain">
        <div class="section__content">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Global Transaction Banking"
          />
          <div>
            <h2>IT<br /><strong>Infrastructure</strong></h2>
            <p>
              SunFlex has joined the system integration field and provided ICT
              Solutions Since 2010. Since then SunFlex has been key partner of
              world leading ICT and pioneering and successful enterprise in IT
              infrastructure solutions for Banking, MFI, Telecommunication, SMB.
              Currently, SunFlex is one of the local Leading System integration
              solutions and Service providers in Cambodia.
            </p>
            <h6>
              <strong
                >Innovations that accelerate your digital transformation</strong
              >:
            </h6>
            <p>
              Your IT solutions need to work together to create a solid
              foundation for your organization. Learn more about how IT
              infrastructure solutions are designed to complement each other and
              to propel your business into the future.
            </p>
            <h6><strong>Get Cloud-Ready</strong></h6>
            <p>
              Cloud is the new operating model for IT, and it’s transforming how
              business gets done. Now you can get superior results today and
              plan for tomorrow with a cloud-ready IT infrastructure that’s
              available in three consumption models—on premises, cloud at
              customer, and public cloud.
            </p>
            <router-link to="/it-infrastructure" class="btn"
              >Read More</router-link
            >
          </div>
        </div>
      </section>

      <section id="networking-data-analytics" class="section contain">
        <div class="section__content reverse">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Trade and Supply Chain Finance Solutions"
          />
          <div>
            <h2>Networking &amp; Data<br /><strong>Analytics</strong></h2>
            <p>
              Mindarray system has been innovating in networking and data
              analytics technologies. Today, we are positioned as a solution
              provider that is enabling enterprises and government sectors to
              streamline their IT operations using innovative modules like:
            </p>
            <ul>
              <li>
                Infrastructure Intelligence Platform (IIP) for Network
                Management
              </li>
              <li>
                Data Analytics Platform (DAP) for Log Management &amp; Flow
                Analytics
              </li>
              <li>ITSM Platform for IT Service Automation</li>
            </ul>
            <p>
              All offerings of Mindarray system come under the brand name of
              Motadata, which includes IT Infrastructure Monitoring, Log &amp;
              Flow Management, and IT Service Management Platform. These are
              designed to provide operational insights into an IT infrastructure
              and identify &amp; resolve complex problems to maximize the
              overall uptime of the services.
            </p>
            <router-link to="/networking" class="btn">Read More</router-link>
          </div>
        </div>
      </section>

      <section id="cloud-solutions" class="section contain">
        <div class="section__content">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Trade and Supply Chain Finance Solutions"
          />
          <div>
            <h2>Cloud<br /><strong>Solutions</strong></h2>
            <h5><strong>Public Cloud</strong></h5>
            <p>
              Public clouds are the most common way of deploying cloud computing
              which are all hardware, software, and other supporting
              infrastructure is owned and managed by the cloud provider. In a
              public cloud, you share the same hardware, storage, and network
              devices with other organizations or cloud “tenants.” Public cloud
              deployments are frequently used to provide web-based email, online
              office applications, storage, and testing and development
              environments.
            </p>
            <h5><strong>Private Cloud</strong></h5>
            <p>
              A private cloud consists of computing resources used exclusively
              by one business or organization. The private cloud can be
              physically located at your organization’s on-site datacenter, or
              it can be hosted by a third-party service provider. But in a
              private cloud, the services and infrastructure are always
              maintained on a private network and the hardware and software are
              dedicated solely to your organization. In this way, a private
              cloud can make it easier for an organization to customize its
              resources to meet specific IT requirements.
            </p>
            <router-link to="/cloud-solutions" class="btn"
              >Read More</router-link
            >
          </div>
        </div>
      </section>

      <section id="big-data" class="section contain">
        <div class="section__content reverse">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Liquidity Management Solutions"
          />
          <div>
            <h2>Big Data &amp;<br /><strong>Data Warehouse</strong></h2>
            <p>
              Big data is a combination of structured, semi-structured and
              unstructured data collected by organizations that can be mined for
              information and used in predictive modeling and other advanced
              analytics applications. Big data is often characterized by the 3
              categories below:
            </p>
            <ul>
              <li>the large volume of data in many environments,</li>
              <li>the wide variety of data types stored in big data systems</li>
              <li>
                the velocity at which the data is generated, collected and
                processed.
              </li>
            </ul>
            <p>
              A Data Warehousing (DW) is process for collecting and managing
              data from varied sources to provide meaningful business insights.
              A Data warehouse is typically used to connect and analyze business
              data from heterogeneous sources. The data warehouse is the core of
              the BI system which is built for data analysis and reporting.
            </p>
            <router-link to="/big-data" class="btn">Read More</router-link>
          </div>
        </div>
      </section>

      <section id="digital-banking" class="section contain">
        <div class="section__content">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Digital Payments Solutions"
          />
          <div>
            <h2>Digital Banking<br /><strong>Solutions</strong></h2>
            <h5><strong>Digital Transaction Banking</strong></h5>
            <p>
              Digital technologies are upsetting the competitive order and the
              roles that payments play in the operations of businesses and in
              the lives of consumers. Yet these same disruptions are also
              creating tremendous opportunity for banks that can quickly adapt
              their long-term business strategies.
            </p>
            <h5><strong>Digital Lending</strong></h5>
            <p>
              Digital lending is the process of offering loans that are applied
              for, disbursed, and managed through digital channels, in which
              lenders use digitized data to inform credit decisions and build
              intelligent customer engagement. Digital lending takes many shapes
              and forms – from automating small pieces, to a fully digital
              lending process, from acquisition to renewal. Digital lending
              isn’t just doing the same thing better, but rather creating
              something new.
            </p>
            <router-link to="/digital-banking" class="btn"
              >Read More</router-link
            >
          </div>
        </div>
      </section>

      <section id="security-solutions" class="section contain">
        <div class="section__content reverse">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="loan management system"
          />
          <div>
            <h2>Security<br /><strong>Solutions</strong></h2>
            <h6><strong>Complete view of vulnerabilities</strong></h6>
            <p>
              We provide detailed information on real security threats, help to
              identify the most critical and less significant vulnerabilities
              along with false positives, so then the Customer can prioritize
              remediation.
            </p>
            <h6><strong>Regulatory compliance</strong></h6>
            <p>
              The detailed reports generated after penetration testing help to
              avoid fines for non-compliance and allow to illustrate due
              diligence to auditors by maintaining required security controls.
            </p>
            <h6><strong>Proactive Remediation</strong></h6>
            <p>
              SunFlex takes the perspective of the adversary, finding weaknesses
              and helping you remediate before the bad guys can do damage.
            </p>
            <h6>
              <strong>Avoiding the cost of system/network downtime</strong>
            </h6>
            <p>
              SunFlex team provides specific guidance and recommendations to
              avoid financial pitfalls by identifying and addressing risks
              before attacks or security breaches occur.
            </p>
            <router-link to="/security-solutions" class="btn"
              >Read More</router-link
            >
          </div>
        </div>
      </section>

      <section id="professional-services" class="section contain">
        <div class="section__content">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Wealth Management Solutions"
          />
          <div>
            <h2>Professional Service<br /><strong>Support</strong></h2>
            <p>
              SunFlex (Cambodia) Co.,Ltd are operated base on industry expertise
              and resource standard qualification which is assure enterprises
              enhance their IT System’s stability to improve management
              capability, competitiveness and business performance base on
              following manners:
            </p>
            <ul>
              <li>
                <h6><strong>System Service</strong></h6>
              </li>
              <li>
                <h6><strong>Database System Service</strong></h6>
              </li>
              <li>
                <h6><strong>IT Service</strong></h6>
              </li>
            </ul>
            <router-link to="/professional-services" class="btn"
              >Read More</router-link
            >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// why import image is error?
import image1 from '@/assets/images/banner1.png';
import image2 from '@/assets/images/banner2.png';
import image3 from '@/assets/images/banner3.png';
import image4 from '@/assets/images/banner4.png';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          desktopSrc: image1,
          mobileSrc: image1,
          alt: 'cash-management-solution'
        },
        {
          desktopSrc: image2,
          mobileSrc: image2,
          alt: 'slide-two'
        },
        {
          desktopSrc: image3,
          mobileSrc: image3,
          alt: 'arx-webinar'
        },
        {
          desktopSrc: image4,
          mobileSrc: image4,
          alt: 'arx-webinar-two'
        }
      ],
      intervalId: null
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slide every 3 seconds
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=block');

/* Existing styles with a few banner-related removals */
.home-container {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

.contain {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Banner */
/* Tailwind classes handle the styling now, so we can remove the old .banner, .banner__slider, and .banner__slide styles */

/* Blue Menu */
.bluemenu {
  background: #003087;
  padding: 10px 0;
}

.bluemenu__nav {
  display: none;
}

.bluemenu__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.bluemenu__list a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

/* Content */
.content {
  padding: 40px 0;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 2.5rem;
  color: #003087;
}

.intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 15px;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.feature-card {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 15px;
}

.feature-card h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 1rem;
}

/* Sections */
.section__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
}

.section__content.reverse {
  direction: rtl;
}

.section__content.reverse > * {
  direction: ltr;
}

.section__content img {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.section__content h2 {
  font-size: 2rem;
  color: #003087;
  margin-bottom: 15px;
}

.section__content h5,
.section__content h6 {
  font-size: 1.2rem;
  margin-top: 15px;
}

.section__content p,
.section__content ul {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
}

.btn:hover {
  background: #45a049;
}

/* Footer */
.footer {
  background: #003087;
  color: white;
  padding: 20px 0;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer__menu {
  display: flex;
  list-style: none;
  padding: 0;
}

.footer__menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.footer__brand b {
  font-size: 1.8rem;
}

.footer__scroll img {
  width: 40px;
}

.footer__mobile {
  display: block;
  text-align: center;
  padding: 20px 0;
}

@media (min-width: 769px) {
  .footer__mobile {
    display: none;
  }
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
</style>
