<template>  
    <div class="home">
        <h1>学生管理系统</h1>
        <div class="button-container">
            <button type="button" class="button" @click="login">登录</button>
            <button type="button" class="button" @click="register">注册</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        login() {
            this.$router.push({ name: 'login' });
        },
        register() {
            this.$router.push({ name:'register' });
        }
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    background: linear-gradient(90deg, rgba(82, 176, 181, 1) 0%, rgba(99, 207, 209, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 130px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}


.button-container {
    display: flex;
    gap: 20px;
}

.button {
    background: linear-gradient(90deg, rgba(82, 176, 181, 1) 0%, rgba(99, 207, 209, 1) 100%);
    color: white;
    border-radius: 5px;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
