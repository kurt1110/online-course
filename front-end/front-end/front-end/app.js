const { createApp } = Vue;

createApp({
  data() {
    return {

      /* ========================
         BRANDING
      ======================== */
      logo: "au-logo.png",

      /* ========================
         AUTH SYSTEM
      ======================== */
      isLogin: true,
      email: "",
      password: "",
      confirmPassword: "",
      searchQuery: "",

      /* ========================
         COURSES DATA
      ======================== */
      courses: [
        {
          id: 1,
          title: "BS in Information Technology",
          instructor: "College of Computer Studies",
          duration: "4 Years",
          image: "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=2048x2048&w=is&k=20&c=YSjDgQRHhi-kPn3GpowGFLPB8jEJN8SFrp2rpBFUD58="
        },
        {
          id: 2,
          title: "BS in Computer Science",
          instructor: "College of Computer Studies",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
        },
        {
          id: 3,
          title: "Bachelor of Science in Business Administration",
          instructor: "College of Business Administration",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        },
        {
          id: 4,
          title: "BSBA - Marketing Management",
          instructor: "College of Business Administration",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
        },
        {
          id: 5,
          title: "BSBA - Financial Management",
          instructor: "College of Business Administration",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
        },
        {
          id: 6,
          title: "Bachelor of Science in Accountancy",
          instructor: "College of Business Administration",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        },
        {
          id: 7,
          title: "Bachelor of Elementary Education",
          instructor: "College of Education",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350"
        },
        {
          id: 8,
          title: "Bachelor of Secondary Education",
          instructor: "College of Education",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        },
        {
          id: 9,
          title: "BS in Civil Engineering",
          instructor: "College of Engineering",
          duration: "5 Years",
          image: "https://images.unsplash.com/photo-1581090700227-1e8a4e8b0d42"
        },
        {
          id: 10,
          title: "BS in Mechanical Engineering",
          instructor: "College of Engineering",
          duration: "5 Years",
          image: "https://images.unsplash.com/photo-1581091870627-3c2aebc7f48d"
        },
        {
          id: 11,
          title: "BS in Electrical Engineering",
          instructor: "College of Engineering",
          duration: "5 Years",
          image: "https://images.unsplash.com/photo-1581092334394-79d5c9b6d22f"
        },
        {
          id: 12,
          title: "Bachelor of Science in Nursing",
          instructor: "College of Nursing",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1580281657521-8a5a7c4f2a9f"
        },
        {
          id: 13,
          title: "Bachelor of Science in Criminology",
          instructor: "College of Criminology",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1581092918484-8313b3c6e1d9"
        },
        {
          id: 14,
          title: "BS in Hospitality Management",
          instructor: "College of Hospitality Management",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
        },
        {
          id: 15,
          title: "BS in Tourism Management",
          instructor: "College of Hospitality Management",
          duration: "4 Years",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        }
      ]
    };
  },

  computed: {
    filteredCourses() {
      if (!this.searchQuery) return this.courses;
      const q = this.searchQuery.toLowerCase();
      return this.courses.filter(c => {
        return (
          (c.title && c.title.toLowerCase().includes(q)) ||
          (c.instructor && c.instructor.toLowerCase().includes(q))
        );
      });
    }
  },

  methods: {

    /* ========================
       AUTH FUNCTIONS
    ======================== */
    submitForm() {
      if (!this.email || !this.password) {
        this.showMessage("Please fill all fields.");
        return;
      }

      if (!this.isLogin && this.password !== this.confirmPassword) {
        this.showMessage("Passwords do not match.");
        return;
      }

      this.showMessage(
        this.isLogin
          ? "Login successful!"
          : "Account created successfully!"
      );

      this.resetForm();
    },

    toggleForm() {
      this.isLogin = !this.isLogin;
      this.resetForm();
    },

    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },

    /* ========================
       COURSE FUNCTIONS
    ======================== */
    viewDetails(course) {
      // Save selected course
      localStorage.setItem("selectedCourse", JSON.stringify(course));

      // Redirect to details page
      window.location.href = "course-details.html";
    },

    /* ========================
       GLOBAL MESSAGE FUNCTION
    ======================== */
    showMessage(message) {
      alert(message);
    }
  }
}).mount("#app");
