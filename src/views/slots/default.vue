<template>
    <div>
        <slot-components>
            <div>这是一个默认插槽位置</div>
        </slot-components>
    </div>
</template>

<script>
import slotComponents from './components'
export default {
    name: 'default',
    components: { slotComponents },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
