<template>
	<div id="content">
		<el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm"class="">
			<el-form-item label="密码" label-width="100px" style="margin-top: 20px" prop="pass">
				<el-input class="w-50" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" label-width="100px" prop="checkPass">
				<el-input type="password" class="w-50" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="年龄" label-width="100px" prop="age">
				<el-input class="w-50" v-model.number="ruleForm.age"></el-input>
			</el-form-item>
			<el-form-item label-width="100px">
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
    export default {
        name: "formRules",
		    data() {
            var checkAge  = (rule,value,callback) => {
                if (!value) {
                    return callback(new Error('请输入年龄'));
                }
                setTimeout(() => {
										if (!Number.isInteger(value)) {
										    callback('请输入整数型')
										} else {
										    if (value < 18) {
										       callback('年龄必须大于18');
                        } else {
										        callback();
                        }
                    }
                },2000)
            };
            var validatePass = (rule,value,callback) => {
                if (value === '') {
                    callback('请输入密码')
                    } else {
                        if (this.ruleForm.checkPass !== '') {
		                        this.$refs.ruleForm.validateField('checkPass');
                    }
                        callback()
                }
            };
            var validatePass2 = (rule,value,callback) => {
								if (value === '') {
								    callback('请再次输入密码');
								} else if (value !== this.ruleForm.pass){
										callback('两次输入密码不一致');
								}else {
								    callback()
								}
            }
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
		                    { validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            }
        },
		    methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
	#content {
		width: 800px;
		height: 400px;
		border: 1px solid #3a33d1;
	}
	.w-50 {
		width: 50%;
	}
</style>
