<template>
  <div class="containerers">
    <div class="card">

        <h2>{{ currentUser.username }}</h2>
      
      <div class="followers">
        <p>
          <strong>Token:</strong>
          {{ currentUser.accessToken.substring(0, 20) }} ...
          {{
            currentUser.accessToken.substr(currentUser.accessToken.length - 20)
          }}
        </p>
        <p>
          <strong>Id:</strong>
          {{ currentUser.id }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ currentUser.email }}
        </p>
      </div>
      <div class="button-follow"></div>
      <div class="auth">
        <strong>Authorities:</strong>
        
          <p v-for="role in currentUser.roles" :key="role">{{ role }}</p>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
.containerers {
  padding-top: 100px;
  padding-bottom: 100px;
}
.card {
  width: 350px;
  height: fit-content;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #89d8f0;
  background: #1C86EE;
  color: white;
}

</style>
