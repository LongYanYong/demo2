<template>
    <div>
        <el-form :model="form" :inline="true" size="small" label-width="83px" label-position="left" :header-cell-style="{ color: '#53627C' }">
            <el-form-item label="供应商编号" class="el-col-6">
                <el-input v-model="form.venId" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称" class="el-col-6">
                <el-input v-model="form.venName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="类目" class="el-col-6">
                <el-select>
                    <el-option label="选项一" value="jj"></el-option>
                    <el-option label="选项二" value="cc"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌名称">
                <el-input v-model="form.brandName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="合作模式" class="el-col-6">
                <el-select>
                    <el-option label="选项一" value="ee"></el-option>
                    <el-option label="选项二" value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态" class="el-col-6">
                <el-select>
                    <el-option label="选项一" value="3"></el-option>
                    <el-option label="选项二" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="审核状态" class="el-col-6">
                <el-select>
                    <el-option label="选项一" value="5"></el-option>
                    <el-option label="选项二" value="6"></el-option>
                </el-select>
            </el-form-item>
            <div style="clear: both;"></div>
        </el-form>
        <div style="display: flex; justify-content: space-between;margin-bottom: 12px">
            <div>
                <el-button>审批通过</el-button>
                <el-button>显示列</el-button>
            </div>
            <div>
                <el-button>重置</el-button>
                <el-button type="primary">搜索</el-button>
            </div>
        </div>
        <el-table :data="profitsList" border>
            <el-table-column prop="venId" label="供应商编号"></el-table-column>
            <el-table-column prop="venName" label="供应商名称"></el-table-column>
            <el-table-column prop="brandName" label="品牌名称"></el-table-column>
            <el-table-column prop="categoryId" label="类目"></el-table-column>
            <el-table-column prop="venMode" label="合作模式"></el-table-column>
            <el-table-column prop="rateData" label="毛利"></el-table-column>
            <el-table-column prop="status" :formatter="formatter" label="状态"></el-table-column>
            <el-table-column prop="reviewStatus" :formatter="changeState" label="审核状态"></el-table-column>
            <el-table-column prop="updateTime" label="操作时间"></el-table-column>
            <el-table-column prop="updateName" label="操作人"></el-table-column>
            <el-table-column prop="updateId" label="操作" min-width="120px">
                <template slot-scope="scope">
                    <el-row class="color-0C66FF">
                        <el-button size="mini" class="color-0C66FF" @click="goDetails(scope)">查看</el-button>
                        <el-button size="mini" class="color-0C66FF" @click="editData">编辑</el-button>
                        <el-button size="mini" class="color-0C66FF">停用</el-button>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
        <lyy-pager :pager="pager" :total="total" @click="changePager"></lyy-pager>
    </div>
</template>

<script>
import scope from '../../views/slots/scope'

export default {
    data() {
        return {
            prop: {
                value: ''
            },
            form: {
                venId: '',
                venName: '',
                categoryId: '',
                brandName: ''
            },
            pager: {
                pagerSize: 10,
                pagerNu: 1
            },
            total: 200,
            profitsList: []
        }
    },
    created() {
        this.httpGetTable()
    },
    methods: {
        changePager(data) {
            this.pager = data
            this.httpGetTable()
        },
        formatter(row) {
            //console.log(row.status)
            if (row.status === 1) {
                return '启用'
            }
            return '禁用'
        },
        changeState(row) {
            const states = row.status
            switch (states) {
                case 0:
                    return '审核通过'
                    break
                case 1:
                    return '审核中'
                    break
                default:
                    return '审核驳回'
            }
        },
        editData(data) {
            console.log(data);
            this.$router.push({ name: 'profitsEditor', query: { id: data.row.id } })
        },
        httpGetTable() {
            const params = Object.assign({}, this.form, this.pager)
            this.$http.post(this.$service.profits.pagingVcVendorRate, params).then(res => {
                //console.log(res)
                this.profitsList = res.data.data
                this.total = res.data.total
            })
        },
        goDetails(data) {
            //console.log(data)
            this.$router.push({ name: 'profitsDetails', query: { id: data.row.id } })
            //console.log(scope)
        }
    }
}
</script>

<style scoped>
.color-0C66FF {
    color: #0c66ff;
}
.color-53627C {
    color: #53627c;
}
</style>
