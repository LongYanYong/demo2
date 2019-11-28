<template>
		<div>
			<slot-components>
					<div>sdaasd</div>
					<div>sdaasd</div>
					<div>sdaasd</div>
					<div>sdaasd</div>
					<div>sdaasd</div>
					<div>sdaasd</div>
			</slot-components>
		</div>
</template>

<script>
	import slotComponents from './components'
    export default {
        name: "default",
		    components: {slotComponents},
		    data() {
            return {}
		    }
    }
</script>

<style scoped>

</style>
