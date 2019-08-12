<template>
<div class="error-main">
    <div class="main">
        <div class="error-l fl">
             <div class="l-tex">
                <p>您所访问的网页不存在</p>
                <router-link :to="{path:'/index'}">返回首页</router-link>
            </div>
        </div>
        <div class="error-r fr">
              <img src="../assets/error-1.png">
        </div>
    </div>
    <div class=""></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped> 
.error-main{width:100%;height:370px;background:url(../assets/error-2.jpg) no-repeat center 96px;background-size:100% 175px}
.main{width:1200px;margin:0 auto; display: flex; justify-content: center}
.error-l{margin:135px 50px 0 0}
.error-l .l-tex a:hover{background-color:#eaeaea}
img{display:block}
.error-l .l-tex{float:left;padding-left:35px;margin:0 35px;border-left:1px solid rgba(255,255,255,.15)}
.error-l .l-tex p{color:#fff;font-size:16px;line-height:24px}
.error-l .l-tex a{display:block;width:120px;line-height:34px;text-align:center;font-size:12px;color:#f66e23;background-color:#fff;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;margin-top:10px}

</style>

