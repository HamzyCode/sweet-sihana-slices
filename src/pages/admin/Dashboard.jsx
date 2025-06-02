
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <h1 className="dashboard-title">Welcome to Admin Dashboard</h1>
        <p className="dashboard-greeting">Hello, {user?.email || 'Admin'}!</p>
        
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h2>Products</h2>
            <p>Manage your cake products</p>
            <a href="/admin/products" className="dashboard-card-link">Go to Products</a>
          </div>
          
          <div className="dashboard-card">
            <h2>Categories</h2>
            <p>Manage product categories</p>
            <a href="/admin/categories" className="dashboard-card-link">Go to Categories</a>
          </div>
          
          <div className="dashboard-card">
            <h2>Site Content</h2>
            <p>Edit website text and images</p>
            <a href="/admin/content" className="dashboard-card-link">Go to Content</a>
          </div>
        </div>
        
        <div className="dashboard-help">
          <h3>Admin Dashboard Guide</h3>
          <div className="guide-section">
            <h4>Getting Started</h4>
            <p>
              This admin dashboard allows you to manage all aspects of your cake website.
              You can add, edit or delete products, manage product categories, and update
              site content like the hero section, about text, and more.
            </p>
          </div>
          
          <div className="guide-section">
            <h4>Managing Products</h4>
            <ul>
              <li><strong>Add Products:</strong> Click "Go to Products" then "Add New Product" to create new cake listings</li>
              <li><strong>Edit Products:</strong> In the products table, click "Edit" next to any product to modify its details</li>
              <li><strong>Delete Products:</strong> Click "Delete" next to any product to remove it (this action cannot be undone)</li>
              <li><strong>Images:</strong> Upload high-quality images for your cakes to showcase them beautifully</li>
            </ul>
          </div>
          
          <div className="guide-section">
            <h4>Product Information</h4>
            <p>When adding or editing products, make sure to include:</p>
            <ul>
              <li>Descriptive product name</li>
              <li>Short and long descriptions</li>
              <li>High-quality product image</li>
              <li>Price (optional)</li>
              <li>Ingredients list</li>
              <li>Category selection</li>
              <li>Frosting type and cake shape</li>
            </ul>
          </div>
          
          <div className="guide-section">
            <h4>Tips for Success</h4>
            <ul>
              <li>Use high-resolution images (at least 800x800 pixels)</li>
              <li>Write compelling product descriptions</li>
              <li>Keep ingredient lists accurate and complete</li>
              <li>Regularly update your product catalog</li>
              <li>Test your changes by viewing the live website</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
