<template>
    <slot-components>
        <template #four="data">
            <div>{{ data[0].name }}</div>
        </template>
        <template #default="data">
            <div>{{ data[0].age }}</div>
        </template>
    </slot-components>
</template>

<script>
    import slotComponents from './components';
    export default {
        name: 'name',
        components: {slotComponents},
        data() {
            return {
                name: 'three'
            }
        }
    }
</script>
