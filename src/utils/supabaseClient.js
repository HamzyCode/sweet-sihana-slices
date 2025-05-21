
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ttbzcflrbrviammxjymi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0YnpjZmxyYnJ2aWFtbXhqeW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMDU0MTUsImV4cCI6MjAzMjY4MTQxNX0.c7ezfj9ZlL5xgOUV9DRUu8DRMcuINx_t_0U1ac7xLQg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchProductIngredients(productId) {
  const { data, error } = await supabase
    .from('product_ingredients')
    .select('*')
    .eq('product_id', productId);
  
  if (error) {
    console.error('Error fetching product ingredients:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchProductById(id) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  
  return data;
}
