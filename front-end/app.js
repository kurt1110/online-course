const { createApp } = Vue;

createApp({
  data() {
    return {
      // Logo
      logo: "arauillo-logo.png",

      // Login/Signup toggle
      isLogin: true,

      // Form fields
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    submitForm() {
      if (!this.email || !this.password) {
        alert("Please fill all fields.");
        return;
      }

      if (!this.isLogin && this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      alert(this.isLogin ? "Logging in..." : "Signing up...");
      // Add backend logic here
    }
  }
}).mount("#app");
