<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list justify="space-around">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon> </span>
      <v-toolbar-title>
        <v-btn flat to="/">
          <v-icon left dark>mdi-home</v-icon>
          Home
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-items class="d-sm-none d-md-flex d-none d-sm-flex">
        <v-btn color="pink-darken-3" flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark class="mx-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- <BRow class="text-center">


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
      </BRow> -->

      <v-container fluid>
        <RouterView />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: 'Welcome !',
      sidebar: false,
      menuItems: [
        { title: 'Research', path: '/research', icon: 'mdi-magnify' },
        { title: 'Publications', path: '/publications', icon: 'mdi-note' },
        { title: 'Talks', path: '/talks', icon: 'mdi-chat' },
        { title: 'Software', path: '/software', icon: 'mdi-code-braces' },
        { title: 'Teaching', path: '/teaching', icon: 'mdi-school' },
        { title: 'Projects', path: '/projects', icon: 'mdi-microscope' },
        { title: 'Events', path: '/events', icon: 'mdi-party-popper' },
      ]
    }
  },
};
</script>

<style scoped></style>
