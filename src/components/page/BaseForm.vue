<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 양식</el-breadcrumb-item>
                <el-breadcrumb-item>기본서식</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="입력창">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="콤보박스">
                        <el-select v-model="form.region" placeholder="안철수">
                            <el-option key="bbk" label="이명박" value="bbk"></el-option>
                            <el-option key="xtc" label="박근혜" value="xtc"></el-option>
                            <el-option key="imoo" label="안철수" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="일자시간">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="일자선택" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="시간선택" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="OPTION">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="SWITCH">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="체크박스">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="이명박" name="type"></el-checkbox>
                            <el-checkbox label="박근혜" name="type"></el-checkbox>
                            <el-checkbox label="안철수" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="라디오버튼">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="이명박"></el-radio>
                            <el-radio label="박근혜"></el-radio>
                            <el-radio label="안철수"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Text">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Save</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function(){
            return {
                options:[
                    {
                        value: 'guangdong',
                        label: '전북',
                        children: [
                            {
                                value: 'guangzhou',
                                label: '임실군',
                                children: [
                                    {
                                        value: 'tianhe',
                                        label: '성수면'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '청웅면'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '전주시',
                                children: [
                                    {
                                        value: 'changan',
                                        label: '덕진구'
                                    },
                                    {
                                        value: 'humen',
                                        label: '완산구'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '전남',
                        children: [
                            {
                                value: 'changsha',
                                label: '보성군',
                                children: [
                                    {
                                        value: 'yuelu',
                                        label: '겸백면'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['이명박'],
                    resource: '박근혜',
                    desc: '',
                    options: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('저장성공！');
            }
        }
    }
</script>
