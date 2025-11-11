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
      type
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
        .select('id, image_url')
        .eq('report_id', reportId)
        .order('order', { ascending: true });

    if (error) {
        console.error('Error fetching insight report images:', error);
        throw error;
    }

    // 返回 image_url 数组，DetailModal 期望的格式
    return data.map(img => img.image_url);
}