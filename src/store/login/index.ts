import { defineStore } from "pinia";
import { removeToken,removeTokenOriginal } from "@/tool/token";

export const useLoginStore=defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
            phone:'',
            email:'',

        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        }
    }
}) 