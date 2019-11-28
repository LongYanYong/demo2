<template>
	<div>
		<div>这是一个slot组件</div>
		<div>这是默认插槽第一个的开始位置</div>
		<slot v-bind="scopeData"></slot>
		<div>这是默认第一个插槽的尾部</div>
		<br>
		<div>这里也需要第二个插槽</div>
		<slot name="second"></slot>
		<div>这里是第二个插槽的尾部</div>
		<br>
		<div>这里也需要第三个插槽</div>
		<slot name="three"></slot>
		<div>这里是第三个插槽的尾部</div>
		<br>
		<div>这里也需要第四个插槽</div>
		<slot name="four" v-bind="scopeData"></slot>
		<div>这里是第四个插槽的尾部</div>
		<br>
		<div>这里也需要第五个插槽</div>
		<slot name="five"></slot>
		<div>这里是第五个插槽的尾部</div>
	</div>
</template>

<script>
    export default {
        name: "components",
		    data() {
            return {
                scopeData: [
		                {
		                    name: 'yangxiong',
				                age: 18
		                }
                ]
            }
		    }
    }
</script>

<style scoped>

</style>
