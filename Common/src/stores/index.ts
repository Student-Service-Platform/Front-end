/**
 * Author: 杨龙辉
 * Description: 定义request体
 * CreatedAt: 2024.10.2 20:10
 * Latest: 2024.10.2 20:10
 */

import { defineStore } from "pinia";

// 此Store用于保存config
export const useConfigStore = defineStore("config",()=>{
    const domain = "localhost"
    const https = false

    return { domain, https }
})