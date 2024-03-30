<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <BContainer fluid>
    <header>
      <BRow class="text-center">


        <BNavbar toggleable="md" variant="dark" v-b-color-mode="'dark'">
          <BNavbarBrand href="/">Home</BNavbarBrand>

          <BNavbarToggle target="navbar-toggle-collapse">
          </BNavbarToggle>

          <BCollapse id="navbar-toggle-collapse" is-nav>
            <BNavbarNav class="ml-auto">

              <BNavItem>
                <RouterLink to="/research">Research</RouterLink>
              </BNavItem>
              <BNavItem>
                <RouterLink to="/publications">Publications</RouterLink>
              </BNavItem>
              <BNavItem>
                <RouterLink to="/software">Software</RouterLink>
              </BNavItem>
              <BNavItem>
                <RouterLink to="/teaching">Teaching</RouterLink>
              </BNavItem>
              <BNavItem>
                <RouterLink to="/projects">Projects</RouterLink>
              </BNavItem>
              <BNavItem>
                <RouterLink to="/events">Events</RouterLink>
              </BNavItem>
            </BNavbarNav>
          </BCollapse>
        </BNavbar>
      </BRow>

    </header>
    <BRow class="m-4">
      <RouterView />
    </BRow>
  </BContainer>
</template>

<style scoped></style>
