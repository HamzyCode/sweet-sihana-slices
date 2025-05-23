
import { supabase } from "./client";

// Function to check if a user has admin role
export const checkIsAdmin = async (userId: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    
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
    const { data, error } = await supabase
      .from('profiles')
      .update({ role: 'admin' })
      .eq('email', email)
      .select();
    
    if (error) {
      console.error('Error setting admin role:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in setAdminForEmail function:', error);
    return false;
  }
};
