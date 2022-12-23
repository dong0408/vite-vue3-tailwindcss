<template>
    <div class="background-wrap">
        <div class="top-bar">
            <el-image src="@/assets/one_piece.jpg" fit="fill"></el-image>
            <!-- <div class="language-switch">
                <div class="item" :class="{ active: lang === 'zh' }" @click="switchLanguage('zh')">中文</div>
                <div>|</div>
                <div class="item" :class="{ active: lang === 'en' }" @click="switchLanguage('en')">English</div>
            </div> -->
        </div>
        <slot></slot>
        <div class="footer">
            <div>©2022 艾拉比 版权所有</div>
            <div><el-link href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">沪ICP备 17054239号-4</el-link></div>
            <div>
                <el-link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502018772" target="_blank">沪公网安备 31011502018772号</el-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.background-wrap {
    background-image: url('@/assets/icon_bkg.png');
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.7;

    .el-link {
        color: white;
        font-size: 12px;
    }

    div {
        display: inline-block;
        margin: 0 7px;
    }
}
</style>
