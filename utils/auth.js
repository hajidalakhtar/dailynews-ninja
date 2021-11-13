import { supabase } from './supabaseClient'

const useAuthLogin  =  async (email, password) => {
    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: password
    })

    let { data: profiles, error_user } = await supabase
      .from('profiles')
      .select("*")
      .eq('id', user.id)
        sessionStorage.setItem('auth', JSON.stringify(profiles[0]));

      return profiles
} 

export  {useAuthLogin}