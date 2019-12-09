<template>
    <el-pagination
        :current-page="pager.pageNo"
        :page-size="pager.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        align="right"
        @size-change="sizeChange"
        @current-change="currentChange"
    >
    </el-pagination>
</template>

<script>
export default {
    props: {
      total: {  type: Number,
		      default: 0
      },
		  pager: {   type: Object,
				  default: () => ({pageSize: 10, pageNo: 1})
		  }
    },
    data() {
        return {}
    },
    methods: {
        sizeChange(pageSize) {
            this.pager.pageSize = pageSize;
            this.$emit('change', this.pager);
        },
        currentChange(pageNo) {
            this.pager.pageNo = pageNo;
            this.$emit('change', this.pager);
        }
    }
}
</script>

<style scoped></style>
