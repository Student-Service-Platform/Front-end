<template>
    <cus-input path="@/assets/username.png" info="用户名"></cus-input>
</template>

<script lang="ts">
    import CusInput from '@/ui/CusInput.vue';

    export default {
        name: "login-view",
        components: [
            CusInput
        ]
    }
</script>
