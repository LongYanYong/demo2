<template>
	<div class="about">
		<button @click="goRouter('about')">goAbout</button>
		<button @click="goRouter('demo')">goDemo</button>
		<select name="" id="">
			<option v-for="(item, index) in optionData " :key="index" :value="item.value">{{ item.name }}</option>
		</select>
		<input type="text" v-model="ipt">
		<button @click="addData">addData</button>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                ipt: ''
            }
        },
		    computed: {
            optionData() {
                return this.$store.state.optionData
            }
		    },
		    mounted() {
				    this.$store.dispatch('setOption', '123');
				    console.log(this.$route.meta.demo, '1234567');
		    },
        methods: {
            goRouter(name) {
                // TODO:params传参刷新之后不可见
                this.$router.push({name, params: {a: [1,2,3,4]}});
                // this.$router.push({name, params: {a: {aa: 1}}});
		            // TODO:query传参数据会保存到url中
		            // TODO:query 数据传参在url中如果是对象，会展示成【Object， Object】
                // this.$router.push({name, query: {a: [1,2,3,4]}});
                // this.$router.push({name, query: {a: {aa: 1}}});
		            // TODO: replace不会保存当前页面跳转历史浏览记录
                // this.$router.replace({name, query: {a: {aa: 1}}});

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
