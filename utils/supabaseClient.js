import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zicshmpqkikwobuhvzeq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTAwNDI4MywiZXhwIjoxOTUwNTgwMjgzfQ.7XfemvisJVzEaGfnurrokrKEDlN0G01f26rPsDBqFfE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)