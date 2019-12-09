<template>
    <div>
        <el-form :model="form" :inline="true" size="mini">
            <el-form-item label="公司编号">
                <el-input v-model="form.id" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="公司名称">
                <el-input v-model="form.companyName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="companyList" :header-cell-style="{ color: '#0A1F44' }" align="center" class="bt-1">
            <el-table-column prop="id" label="公司编号"> </el-table-column>
            <el-table-column prop="companyName" label="公司名称"> </el-table-column>
            <el-table-column prop="operatingNum" label="经营角色数量"> </el-table-column>
            <el-table-column prop="companyCreated" label="成立时间"> </el-table-column>
            <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" class="color-0C66FF" @click="getDetails(scope)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <lyy-pager :pager="pager" :total="total" @change="pageChange"></lyy-pager>
    </div>
</template>

<script>
import scope from '../../views/slots/scope'

export default {
    data() {
        return {
            currentPage4: 1,
            form: {
                id: '',
                companyName: ''
            },
            pager: {
                pageSize: 10,
                pageNo: 1
            },
            total: 100,
            companyList: []
        }
    },
    created() {
        this.httpGetTable()
    },
    methods: {
        search() {
            this.pager = {
                pageSize: 10,
                pageNo: 1
            }
            this.httpGetTable()
        },
        pageChange(data) {
            this.pager = data
            this.httpGetTable()
        },
        httpGetTable() {
            const params = Object.assign({}, this.form, this.pager)
            this.$http.post(this.$service.companyPagingQuery, {params}).then(res => {
                this.companyList = res.data.data;
                this.total = res.data.total;
            })
        },
        getDetails(data) {
            this.$router.push({ name: 'companyDetails', query: { id: data.row.id } })
        }
    }
}
</script>

<style scoped>
.bt-1 {
    border-top: 1px solid rgba(225, 228, 232, 1);
}
.color-0A1F44 {
    color: #0a1f44;
}
.color-0C66FF {
    color: #0c66ff;
}
</style>
