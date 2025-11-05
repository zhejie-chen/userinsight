// src/services/api/conferences.js

import { supabase } from '../supabase';

/**
 * 1. 获取所有发布会事件用于左侧时间轴 (和日历)
 * Fetches all events from the conference-events table.
 */
export async function getTimelineEvents() {
    console.log('Fetching timeline events...');
    // --- 必须的改动: 添加 'replay_url' 和 'Pressconference_type' ---
    const { data, error } = await supabase
        .from('conference-events')
        .select('id, title, event_date, replay_url, Pressconference_type') // <-- 1. 在这里添加字段
        .order('event_date', { ascending: false });

    if (error) {
        console.error('Error fetching timeline events:', error);
        throw error;
    }

    const formattedData = data.map(event => ({
        id: `evt-${event.id}`,
        date: event.event_date,
        title: event.title,
        replayUrl: event.replay_url, // <-- 传递 replay_url
        Pressconference_type: event.Pressconference_type, // <-- 2. 传递新字段
        reportId: null
    }));

    console.log('Successfully fetched timeline events:', formattedData);
    return formattedData;
}

/**
 * 2. 获取所有已发布的发布会报告用于右侧卡片
 * Fetches all reports with 'published' status from the conference-reports table.
 */
export async function getConferenceReports() {
    console.log('Fetching conference reports...');
    // --- 必须的改动: 移除 'replay_url' ---
    const { data, error } = await supabase
        .from('conference-reports')
        .select('id, event_id, title, description, cover_image_url, team_name, action_type, external_url')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching conference reports:', error);
        throw error;
    }

    const formattedData = data.map(report => ({
        id: report.id,
        event_id: report.event_id,
        title: report.title,
        description: report.description,
        image: report.cover_image_url,
        action_type: report.action_type,
        external_url: report.external_url,
        team: report.team_name,
    }));

    console.log('Successfully fetched conference reports (raw):', formattedData);
    return formattedData;
}


/**
 * 3. 根据报告ID获取其所有详细图片
 * Fetches all images for a specific report from the conference-report_images table.
 * @param {string} reportId - The UUID of the conference report.
 */
export async function getReportImages(reportId) {
    console.log(`Fetching images for reportId: ${reportId}`);
    if (!reportId) {
        console.error('getReportImages called with invalid reportId');
        return [];
    }
    const { data, error } = await supabase
        .from('conference-report_images')
        .select('image_url')
        .eq('report_id', reportId)
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching report images:', error);
        throw error;
    }

    const imageUrls = data.map(img => img.image_url);
    console.log(`Successfully fetched ${imageUrls.length} images:`, imageUrls);
    return imageUrls;
}