// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

// 使用 import.meta.env 读取环境变量
// 注意：变量名必须以 VITE_ 开头，否则 Vite 会出于安全考虑忽略它们
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 增加一个简单的检查，防止变量未加载导致报错
if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase 环境变量缺失，请检查 .env 文件或 Cloudflare 设置')
}

export const supabase = createClient(supabaseUrl, supabaseKey)