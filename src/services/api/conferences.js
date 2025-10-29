// src/services/api/conferences.js

import { supabase } from '../supabase';

/**
 * 1. 获取所有发布会事件用于左侧时间轴
 * Fetches all events from the conference-events table.
 */
export async function getTimelineEvents() {
    console.log('Fetching timeline events...');
    const { data, error } = await supabase
        .from('conference-events')
        .select('id, title, event_date')
        .order('event_date', { ascending: false });

    if (error) {
        console.error('Error fetching timeline events:', error);
        throw error;
    }

    // Supabase returns event_date as 'YYYY-MM-DD'. We need to map it to the component's expected format.
    // The component's processing logic will handle the rest.
    const formattedData = data.map(event => ({
        id: `evt-${event.id}`, // Add a prefix to avoid potential DOM ID conflicts
        date: event.event_date,
        title: event.title,
        reportId: null // This will be linked later by a separate query/logic
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
    const { data, error } = await supabase
        .from('conference-reports')
        .select('id, event_id, title, description, cover_image_url, team_name, replay_url, action_type, external_url')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching conference reports:', error);
        throw error;
    }

    // We need to get the event_date from the related event for sorting on the page
    // Let's get all events first to create a mapping.
    const { data: events, error: eventsError } = await supabase
        .from('conference-events')
        .select('id, event_date');

    if (eventsError) {
        console.error('Error fetching event dates for reports:', eventsError);
        throw eventsError;
    }

    const eventDateMap = new Map(events.map(e => [e.id, e.event_date]));

    const formattedData = data.map(report => ({
        id: report.id,
        event_id: report.event_id,
        title: report.title,
        description: report.description,
        image: report.cover_image_url,
        date: eventDateMap.get(report.event_id) || 'Unknown Date',
        replayUrl: report.replay_url,
        action_type: report.action_type,
        external_url: report.external_url,
        // Pass team_name for the modal
        team: report.team_name,
    }));

    console.log('Successfully fetched conference reports:', formattedData);
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