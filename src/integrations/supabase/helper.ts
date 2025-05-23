
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
    // Using an update query with proper typing
    const { error } = await supabase
      .from('profiles')
      .update({ role: 'admin' })
      .eq('email', email);
    
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
