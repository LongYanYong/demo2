<template>
	<div>
		<el-form :inline="true" :model="formInline" size="mini">
			<el-form-item label="公司编号">
				<el-input v-model="formInline.code" placeholder="请输入"></el-input>
			</el-form-item>
			<el-form-item label="公司名称">
				<el-input v-model="formInline.name" placeholder="请输入"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table align="center" :data="companyList" class="bt-1" :header-cell-style="{color:'#0A1F44'}">
			<el-table-column
				prop="code"
				label="公司编号"
				>
			</el-table-column>
			<el-table-column
				prop="name"
				label="公司名称"
				>
			</el-table-column>
			<el-table-column
				prop="number"
				label="经营角色数量">
			</el-table-column>
			<el-table-column
				prop="time"
				label="成立时间">
			</el-table-column>
			<el-table-column
				prop="operation"
				label="操作">
				<template slot-scope="scope">
						<el-button size="mini" class="color-0C66FF" @click="getDetails">查看</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			:current-page="currentPage4"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="10"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400"
			align="right">
		</el-pagination>
	</div>
</template>

<script>
    export default {
        name: "companyList",
		    data() {
            return {
                currentPage4: '',
                formInline: {
                    code: '',
		                name: ''
                },
				        companyList: [{
                    code: 2222,
						        name: '公司',
                    number: '3',
						        time: '2016-20-5',
                    operation: '详情'
                },
                {
                    code: 1111,
                    name: '公司',
                    number: '3',
                    time: '2016-20-5',
                    operation: '详情'
                },
                {
                    code: 3333,
                    name: '公司',
                    number: '3',
                    time: '2016-20-5',
                    operation: '详情'
                },
				        ]
            }
		    },
		    methods: {
            getDetails() {

            }
		    }
    }
</script>

<style scoped>
.bt-1 {
	border-top:1px solid rgba(225,228,232,1);
}
.color-0A1F44 {
	color:#0A1F44;
}
.color-0C66FF {
	color: #0C66FF;
}
</style>
