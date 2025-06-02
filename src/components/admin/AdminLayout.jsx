
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [editMode, setEditMode] = useState(false);
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Admin Dashboard</h1>
          <p className="sidebar-user">
            {user?.email || 'Admin'}
          </p>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/admin" className={`sidebar-link ${isActive('/admin')}`}>
            Dashboard
          </Link>
          <Link to="/admin/products" className={`sidebar-link ${isActive('/admin/products')}`}>
            Products
          </Link>
          <Link to="/admin/categories" className={`sidebar-link ${isActive('/admin/categories')}`}>
            Categories
          </Link>
          <Link to="/admin/content" className={`sidebar-link ${isActive('/admin/content')}`}>
            Site Content
          </Link>
        </nav>
        
        <div className="sidebar-footer">
          <div className="edit-mode-toggle">
            <span>Edit Mode</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={editMode} 
                onChange={() => setEditMode(!editMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          
          <div className="sidebar-actions">
            <Link to="/" className="view-site-link">View Site</Link>
            <button onClick={handleSignOut} className="signout-button">
              Sign Out
            </button>
          </div>
        </div>
      </aside>
      
      <main className="admin-content">
        <div className={`admin-content-inner ${editMode ? 'edit-mode' : ''}`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
