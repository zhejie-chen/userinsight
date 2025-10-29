// src/services/supabase.js

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://advawhgwgzkydiubzzjb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdmF3aGd3Z3preWRpdWJ6empiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NjE4NDAsImV4cCI6MjA3MDAzNzg0MH0.aXXSmvpdZH62P8GZ2-bqpnNrs0Kfhrnqx-BpBi1CEGc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);