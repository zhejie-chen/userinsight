import { supabase } from '@/services/supabase';

/**
 * 获取所有已发布的洞察报告 (用于卡片列表)
 */
export async function getInsightReports() {
    const { data, error } = await supabase
        .from('insight_reports')
        .select(
            `
      id,
      title,
      date,
      image,
      description,
      category,
      team,
      action_type,
      external_url,
      type,
      extra_url 
    `
        )
        // (已修改) 只选择 status 为 'published' 的报告
        .eq('status', 'published')
        .order('date', { ascending: false });

    if (error) {
        console.error('Error fetching insight reports:', error);
        throw error;
    }

    // (已修改) 移除 replay_url 映射，直接返回数据
    // ConferenceReportCard.vue 会自动处理 replayUrl 不存在的情况 (v-if)
    return data;
}

/**
 * 根据报告 ID 获取详情图片 (用于弹窗)
 * @param {string} reportId
 */
export async function getInsightReportImages(reportId) {
    if (!reportId) return [];

    const { data, error } = await supabase
        .from('insight_report_images')
        // --- 修改: 增加 'scroll_group' 字段 ---
        .select('id, image_url, scroll_group')
        .eq('report_id', reportId)
        .order('order', { ascending: true });

    if (error) {
        console.error('Error fetching insight report images:', error);
        throw error;
    }

    // --- 修改: 返回包含 scroll_group 的对象数组 ---
    return data.map(img => ({
        image_url: img.image_url,
        scroll_group: img.scroll_group
    }));
}