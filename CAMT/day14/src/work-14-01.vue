<template>
  <div id="app">
    <div>
      <nav>
        <ul>
          <router-link to="#" class="router-link">Visual Code Studio</router-link>
          <router-link to='doc' class="router-link">Doc</router-link>
          <router-link to='update'>updates</router-link>
          <router-link to='blog'>Blog</router-link>
          <router-link to='api'>API</router-link>
          <router-link to='extension'>Extensions</router-link>
          <router-link to='faq'>FAQ</router-link>
          <router-link to='learn'>Learn</router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {

    }
</script>

<style>
.router-link{
  margin: 0 5px;
}
</style>