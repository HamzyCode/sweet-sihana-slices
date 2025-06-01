
import { supabase } from "./client";
import { Database } from "./types";

// Function to check if a user has admin role
export const checkIsAdmin = async (userId: string): Promise<boolean> => {
  try {
    // Using maybeSingle to avoid errors when no profile is found
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .maybeSingle();
    
    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
    
    return data?.role === 'admin';
  } catch (error) {
    console.error('Error in checkIsAdmin function:', error);
    return false;
  }
};

// Function to set admin role for a specific email
export const setAdminForEmail = async (email: string): Promise<boolean> => {
  try {
    // First check if user exists in profiles table
    const { data: existingProfile, error: selectError } = await supabase
      .from('profiles')
      .select('id, role')
      .eq('email', email)
      .maybeSingle();

    if (selectError) {
      console.error('Error checking existing profile:', selectError);
      return false;
    }

    if (existingProfile) {
      // Update existing profile to admin
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('email', email);
      
      if (updateError) {
        console.error('Error setting admin role:', updateError);
        return false;
      }
    } else {
      // Get user ID from auth.users if profile doesn't exist yet
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email === email) {
        // Insert new profile with admin role
        const { error: insertError } = await supabase
          .from('profiles')
          .insert({ 
            id: user.id,
            email: email, 
            role: 'admin' 
          });
        
        if (insertError) {
          console.error('Error creating admin profile:', insertError);
          return false;
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error in setAdminForEmail function:', error);
    return false;
  }
};
