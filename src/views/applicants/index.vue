<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <h1>Hello VUe</h1>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    FlatPickr
  },
  data() {
    return {
      appliedFrom: '',
      appliedTo: '',
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 10,
      flatpickrConfig: {
        dateFormat: 'd-M-Y',
        altInput: true,
        altFormat: 'd-M-Y',
        allowInput: true
      },
      showModal: false,
      selectedApplicant: null,
      applicants: [
        {
          download:
            'Supervisor Database Administration -IT_Rath SamOeurn and CV.pdf',
          date: '06-Jun-2025',
          name: 'Rath SamOeurn',
          position: 'Supervisor (Database Administrator)',
          department: 'Information Technology',
          gender: 'Male',
          phone: '85569604'
        },
        {
          download: 'Phanpheanuma Run Resume.pdf',
          date: '04-Jun-2025',
          name: 'Run Phanpheanuma',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '09791242'
        },
        {
          download: 'uch-danet_senior staff_infrastructure_CV_CL.pdf',
          date: '03-Jun-2025',
          name: 'UCH DANET',
          position: 'Senior Staff (Infrastructure)',
          department: 'Information Technology',
          gender: 'Male',
          phone: '07056998'
        },
        {
          download: 'att.eEDjRvSn0bMl-...jpeg',
          date: '03-Jun-2025',
          name: 'Yem Sorphorn',
          position: 'Intern',
          department: 'Credit Control',
          gender: 'Female',
          phone: '09667308'
        },
        {
          download: 'Cheng Seakgech CV.pdf',
          date: '03-Jun-2025',
          name: 'Cheng Seakgech',
          position: 'Intern',
          department: 'Credit Control',
          gender: 'Female',
          phone: '01694828'
        },
        {
          download: 'JulrichCV.pdf',
          date: '03-Jun-2025',
          name: 'Julrich',
          position: 'Senior Staff (Infrastructure)',
          department: 'Information Technology',
          gender: 'Male',
          phone: '01648641'
        },
        {
          download: 'CV-Professional Resume - UY SREYNICH.pdf',
          date: '30-May-2025',
          name: 'Uy Sreynich',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '07055959'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        },
        {
          download: 'Mrs. Bros Mouykeang CV Resume.pdf',
          date: '30-May-2025',
          name: 'Bros Mouykeang',
          position: 'Assistant Manager',
          department: 'Accounting and Finance',
          gender: 'Female',
          phone: '08676756'
        }
      ]
    };
  },
  computed: {
    filteredApplicants() {
      return this.applicants.filter((applicant) => {
        const matchSearch =
          this.searchQuery === '' ||
          applicant.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          applicant.download
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        const matchDate =
          (!this.appliedFrom ||
            new Date(applicant.date) >= new Date(this.appliedFrom)) &&
          (!this.appliedTo ||
            new Date(applicant.date) <= new Date(this.appliedTo));
        return matchSearch && matchDate;
      });
    },
    paginatedApplicants() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredApplicants.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredApplicants.length / this.itemsPerPage);
    }
  },
  methods: {
    filterData() {
      this.currentPage = 1; // Reset to first page on filter
    },
    resetFilters() {
      this.appliedFrom = '';
      this.appliedTo = '';
      this.searchQuery = '';
      this.currentPage = 1; // Reset to first page on reset
    },
    viewApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedApplicant = null;
    },
    formatPhone(phone) {
      return phone.startsWith('0') ? phone : '0' + phone;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    // Add keyboard event listener for closing modal with Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showModal) {
        this.closeModal();
      }
    });
  }
};
</script>

<style scoped>
/* Custom styles for date picker */
.flatpickr-input {
  background-color: white;
}

/* Ensure table headers and cells align properly */
th,
td {
  text-align: left;
  white-space: nowrap;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-20px);
}
</style>
