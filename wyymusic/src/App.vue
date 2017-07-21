<template>
  <div id="app">
  	<v-header></v-header>
  	<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<keep-alive>
			<router-view name="findMusic"></router-view>
		</keep-alive>
    <audioBar></audioBar>
  </div>
</template>

<script>
import header from './components/commom/header';
import audioBar from './components/audio/audioBar';
export default {
  name: 'app',
  components: {
  	'v-header': header,
    'audioBar': audioBar
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 66px;
}
</style>
