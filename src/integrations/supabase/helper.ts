
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
    console.log('Setting admin role for email:', email);
    
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
      console.log('Found existing profile:', existingProfile);
      // Update existing profile to admin
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('email', email);
      
      if (updateError) {
        console.error('Error setting admin role:', updateError);
        return false;
      }
      console.log('Successfully updated profile to admin');
    } else {
      console.log('No existing profile found for email:', email);
    }
    
    return true;
  } catch (error) {
    console.error('Error in setAdminForEmail function:', error);
    return false;
  }
};

// Function to ensure admin setup for specific email
export const ensureAdminSetup = async (email: string): Promise<void> => {
  try {
    console.log('Ensuring admin setup for:', email);
    await setAdminForEmail(email);
  } catch (error) {
    console.error('Error in ensureAdminSetup:', error);
  }
};
