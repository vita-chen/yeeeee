<template>
    <div class="container">

        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="page-header">
                        <h1>無所不問、無所不答</h1>
                </div>
            </div>
        </div>

        <form class="form-horizontal">
            <fieldset>
                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="question">請輸入問題:</label>
                    <div class="col-md-4">
                        <input id="question" name="question" type="text" placeholder="" class="form-control input-md">
                        <span class="help-block">問題請以問號結尾</span>
                    </div>
                </div>
            </fieldset>
        </form>

        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <h2>Yes</h2>
                <img src="../assets/logo.png">
            </div>
        </div>

    </div>
</template>
<script >
import Vue from 'vue'

export default {
    name: 'YesNoComponent',
    data: function () {
        return {
            question: "",
            answer: "",
            image: ""
        }
    },
    methods: {
        questionChanged: function () {
            let question = this.question;
            let _this = this;
            if (question.indexOf("?") >= 0) {
                _this.answer = Date();
                Vue.axios
                    .get("https://yesno.wtf/api")
                    .then(function (response) {
                        _this.answer = response.data.answer;
                        _this.image = response.data.image;
                    })
            }
        }
    }        
}
</script>
<style scoped>
    
</style>