
import { supabase } from '../integrations/supabase/client';

// Function to ensure our target admin has the admin role
export const ensureAdminRole = async () => {
  const ADMIN_EMAIL = 'hamzaademi460@gmail.com';
  
  try {
    // Check if the user exists in profiles table
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('id, email, role')
      .eq('email', ADMIN_EMAIL)
      .maybeSingle();
    
    if (profileError) {
      console.error('Error checking admin profile:', profileError);
      return;
    }
    
    if (profileData) {
      // If user exists but doesn't have admin role, update it
      if (profileData.role !== 'admin') {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('email', ADMIN_EMAIL);
        
        if (updateError) {
          console.error('Error updating admin role:', updateError);
        } else {
          console.log('Admin role granted to', ADMIN_EMAIL);
        }
      }
    } else {
      // User might exist in auth but not in profiles
      // The trigger should handle this automatically next time they login
      console.log('Admin user profile not found. Will be created on next login.');
    }
  } catch (error) {
    console.error('Error in ensureAdminRole:', error);
  }
};
