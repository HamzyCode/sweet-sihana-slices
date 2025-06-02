
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../integrations/supabase/client';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    long_description: '',
    image: null,
    price: '',
    ingredients: [],
    category_id: '',
    frosting_type: '',
    cake_shape: '',
    occasion: ''
  });
  const [newIngredient, setNewIngredient] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*, categories(name)');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Could not load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Could not load categories. Please try again.');
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setImageFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
  const handleAddIngredient = () => {
    if (newIngredient.trim() === '') return;
    
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, newIngredient.trim()]
    });
    setNewIngredient('');
  };
  
  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };
  
  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      description: '',
      long_description: '',
      image: null,
      price: '',
      ingredients: [],
      category_id: '',
      frosting_type: '',
      cake_shape: '',
      occasion: ''
    });
    setImagePreview(null);
    setImageFile(null);
    setShowForm(false);
  };
  
  const handleOpenForm = (product = null) => {
    if (product) {
      setFormData({
        id: product.id,
        name: product.name,
        description: product.description,
        long_description: product.long_description || '',
        image: product.image,
        price: product.price || '',
        ingredients: product.ingredients || [],
        category_id: product.category_id || '',
        frosting_type: product.frosting_type || '',
        cake_shape: product.cake_shape || '',
        occasion: product.occasion || ''
      });
      setImagePreview(product.image ? `${product.image}` : null);
    } else {
      resetForm();
    }
    setShowForm(true);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    try {
      let imagePath = formData.image;
      
      // Upload image if there's a new one
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { error: uploadError } = await supabase
          .storage
          .from('product-images')
          .upload(filePath, imageFile);
          
        if (uploadError) throw uploadError;
        
        // Get public URL for the uploaded image
        const { data: { publicUrl } } = supabase
          .storage
          .from('product-images')
          .getPublicUrl(filePath);
          
        imagePath = publicUrl;
      }
      
      // Prepare product data
      const productData = {
        name: formData.name,
        description: formData.description,
        long_description: formData.long_description,
        image: imagePath,
        price: formData.price ? parseFloat(formData.price) : null,
        ingredients: formData.ingredients,
        category_id: formData.category_id || null,
        frosting_type: formData.frosting_type || null,
        cake_shape: formData.cake_shape || null,
        occasion: formData.occasion || null
      };
      
      let response;
      
      if (formData.id) {
        // Update existing product
        response = await supabase
          .from('products')
          .update(productData)
          .eq('id', formData.id);
      } else {
        // Create new product
        response = await supabase
          .from('products')
          .insert([productData]);
      }
      
      if (response.error) throw response.error;
      
      setSuccess(formData.id ? 'Product updated successfully!' : 'Product created successfully!');
      fetchProducts();
      resetForm();
      
    } catch (error) {
      console.error('Error saving product:', error);
      setError('Error saving product. Please try again.');
    }
  };
  
  const handleDeleteProduct = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setSuccess('Product deleted successfully!');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product. Please try again.');
    }
  };
  
  const frostingOptions = ['Fondant', 'Whipped Cream', 'Buttercream'];
  const shapeOptions = ['Round', 'Square', 'Heart', 'Custom'];
  
  return (
    <AdminLayout>
      <div className="admin-products">
        <div className="admin-header">
          <h1>Products Management</h1>
          <button 
            className="primary-button" 
            onClick={() => handleOpenForm()}
          >
            Add New Product
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        {showForm ? (
          <div className="product-form-container">
            <h2>{formData.id ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Short Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="long_description">Long Description</label>
                <textarea
                  id="long_description"
                  name="long_description"
                  value={formData.long_description}
                  onChange={handleInputChange}
                  rows="5"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="category_id">Category</label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="frosting_type">Frosting Type</label>
                <select
                  id="frosting_type"
                  name="frosting_type"
                  value={formData.frosting_type}
                  onChange={handleInputChange}
                >
                  <option value="">Select Frosting Type</option>
                  {frostingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="cake_shape">Cake Shape</label>
                <select
                  id="cake_shape"
                  name="cake_shape"
                  value={formData.cake_shape}
                  onChange={handleInputChange}
                >
                  <option value="">Select Cake Shape</option>
                  {shapeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <input
                  type="text"
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  placeholder="e.g., Birthday, Wedding, etc."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="ingredients">Ingredients</label>
                <div className="ingredients-input">
                  <input
                    type="text"
                    id="newIngredient"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    placeholder="Add ingredient"
                  />
                  <button 
                    type="button" 
                    onClick={handleAddIngredient}
                    className="secondary-button"
                  >
                    Add
                  </button>
                </div>
                
                {formData.ingredients.length > 0 && (
                  <ul className="ingredients-list">
                    {formData.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient}
                        <button 
                          type="button" 
                          onClick={() => handleRemoveIngredient(index)}
                          className="remove-button"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="primary-button">
                  {formData.id ? 'Update Product' : 'Create Product'}
                </button>
                <button 
                  type="button" 
                  className="secondary-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="products-list">
            {loading ? (
              <div className="loading">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="no-products">
                No products found. Click "Add New Product" to create one.
              </div>
            ) : (
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="product-image-cell">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-thumbnail"
                          />
                        ) : (
                          <div className="no-image">No Image</div>
                        )}
                      </td>
                      <td>{product.name}</td>
                      <td>{product.categories?.name || 'N/A'}</td>
                      <td>
                        {product.price 
                          ? `$${parseFloat(product.price).toFixed(2)}` 
                          : 'N/A'}
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            onClick={() => handleOpenForm(product)}
                            className="edit-button"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="delete-button"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Products;
