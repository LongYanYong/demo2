<template>
    <div class="about">
        <select name="" id="">
            <option v-for="(item, index) in optionData" :key="index" :value="item.value">{{ item.name }}</option>
        </select>
    </div>
</template>
<script>
export default {
    computed: {
        optionData() {
            return this.$store.state.optionData
        }
    }
}
</script>
