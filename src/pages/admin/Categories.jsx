
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../integrations/supabase/client';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ id: null, name: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Could not load categories. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, name: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    if (!formData.name.trim()) {
      setError('Category name cannot be empty.');
      return;
    }
    
    try {
      let response;
      
      if (editMode && formData.id) {
        response = await supabase
          .from('categories')
          .update({ name: formData.name })
          .eq('id', formData.id);
      } else {
        response = await supabase
          .from('categories')
          .insert([{ name: formData.name }]);
      }
      
      if (response.error) throw response.error;
      
      setSuccess(editMode ? 'Category updated successfully!' : 'Category created successfully!');
      fetchCategories();
      resetForm();
    } catch (error) {
      console.error('Error saving category:', error);
      setError('Error saving category. It might already exist.');
    }
  };
  
  const handleEditCategory = (category) => {
    setFormData({ id: category.id, name: category.name });
    setEditMode(true);
  };
  
  const handleDeleteCategory = async (id) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setSuccess('Category deleted successfully!');
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      setError('Error deleting category. It might be used by products.');
    }
  };
  
  const resetForm = () => {
    setFormData({ id: null, name: '' });
    setEditMode(false);
  };
  
  return (
    <AdminLayout>
      <div className="admin-categories">
        <div className="admin-header">
          <h1>Categories Management</h1>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <div className="categories-content">
          <div className="category-form-container">
            <h2>{editMode ? 'Edit Category' : 'Add New Category'}</h2>
            <form onSubmit={handleSubmit} className="category-form">
              <div className="form-group">
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="primary-button">
                  {editMode ? 'Update Category' : 'Create Category'}
                </button>
                {editMode && (
                  <button 
                    type="button" 
                    className="secondary-button"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          
          <div className="categories-list">
            <h2>All Categories</h2>
            {loading ? (
              <div className="loading">Loading categories...</div>
            ) : categories.length === 0 ? (
              <div className="no-categories">No categories found.</div>
            ) : (
              <ul className="categories-items">
                {categories.map((category) => (
                  <li key={category.id} className="category-item">
                    <span>{category.name}</span>
                    <div className="category-actions">
                      <button
                        className="edit-button"
                        onClick={() => handleEditCategory(category)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;
