<template>
    <div class="main">
        <div class="left">
            <Left></Left>
        </div>
        <div class="right">
            <div class="top"><img src="img/title.jpg"></div>
            <div class="buttom"></div>
            <Right></Right>
        </div>
    </div>
</template>
<style type="text/css">
    *{
        padding: 0;
        margin: 0;
    }
    .left{
        width: 100px;
        float: left;
        margin-right: 5px;

    }
    .right{
        width: 1000px;
        float: right;
        margin-left: 5px;
    }
    .main{
        width: 1200px;
        margin: 20px auto;
    }
    .top img{
        height: 200px;
        width: 1000px;
    }
    .left,.right{
        background-color: #f5f5f5;
        height: 550px;
    }
</style>
<script type = "text/javascript">
    import Left from '../components/Left'
    import Right from '../components/Right'
    export default{
        name:'first',
        components:{
            Left,
            Right
        }
    }
</script>