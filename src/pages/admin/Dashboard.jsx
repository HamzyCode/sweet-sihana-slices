
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
          <h3>Getting Started</h3>
          <p>
            This admin dashboard allows you to manage all aspects of your cake website.
            You can add, edit or delete products, manage product categories, and update
            site content like the hero section, about text, and more.
          </p>
          <p>
            Use the "Edit Mode" toggle in the sidebar to enable visual editing when viewing
            the main website. This will show edit buttons on editable elements.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
