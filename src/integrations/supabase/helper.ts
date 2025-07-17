
import { supabase } from "./client";
import { Database } from "./types";

// Function to check if a user has admin role using the secure database function
export const checkIsAdmin = async (userId: string): Promise<boolean> => {
  try {
    // Get the current user's email first
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user?.email) {
      return false;
    }
    
    // Check if the user's email is in the admin list
    const { data, error } = await supabase.rpc('is_admin', { 
      user_email: user.email 
    });
    
    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
    
    return Boolean(data);
  } catch (error) {
    console.error('Error in checkIsAdmin function:', error);
    return false;
  }
};

// Function to safely get user profile
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in getUserProfile function:', error);
    return null;
  }
};

// Function to safely update user profile
export const updateUserProfile = async (userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .maybeSingle();
    
    if (error) {
      console.error('Error updating user profile:', error);
      return { data: null, error };
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error in updateUserProfile function:', error);
    return { data: null, error };
  }
};
