<template>
  <div class="about">
    <button @click="goRouter">goHome</button>
	  <select name="" id="">
		  <option v-for="(item, index) in optionData " :key="index" :value="item.value">{{item.name}}</option>
	  </select>
	  <input type="text" v-model="ipt">
	  <button @click="addData">addData</button>

  </div>
</template>
<script>
	export default {
	    data() {
	        return {
              ipt: '',
	        }
	    },
      computed: {
          optionData() {
              return this.$store.state.optionData
          }
      },
      mounted() {
	        console.log(this.$route.params, '12345678');
	        console.log(this.$route.query, '12345678');
          this.$store.dispatch('setOption', '123')
      },
			methods: {
	        goRouter() {
	            this.$router.push({name: 'home'})
	        },
          addData() {
              if (!this.ipt) {
                  return false
              }
              this.$store.commit('setOptionData', {
                  name: this.ipt,
                  value: Math.random()
              });
          }
			}
	}
</script>
