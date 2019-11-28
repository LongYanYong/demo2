<template>
	<div>
		<slot-components>
			<div>11111</div>
			<!--	 所有的插槽都需要用template标签包裹		-->
			<!--	 template下只能有一个子元素		-->
			<!--	 template不渲染成dom节点		-->
			<!--	 插槽name一致，以最后面的为主		-->
			<template #second>
					<div>2222</div>
			</template>
			<div>111011</div>
			<!--	v-slot可以使用动态name名字		-->
			<template v-slot:[name]>
				<div>33333</div>
			</template>
		</slot-components>
	</div>
</template>

<script>
    import slotComponents from './components'
    export default {
        name: "name",
        components: {slotComponents},
        data() {
            return {
                name: 'three'
            }
        }
    }
</script>

<style scoped>

</style>
