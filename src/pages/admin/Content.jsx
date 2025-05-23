
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../integrations/supabase/client';
import './Content.css';

const Content = () => {
  const [contentSections, setContentSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: null,
    section: '',
    key: '',
    content: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const sectionOptions = [
    { value: 'hero', label: 'Hero Section' },
    { value: 'about', label: 'About Section' },
    { value: 'categories', label: 'Categories Section' },
    { value: 'testimonials', label: 'Testimonials Section' },
    { value: 'faq', label: 'FAQ Section' },
    { value: 'contact', label: 'Contact Section' },
    { value: 'footer', label: 'Footer Section' }
  ];
  
  useEffect(() => {
    fetchContent();
  }, [activeSection]);
  
  const fetchContent = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .eq('section', activeSection);

      if (error) throw error;
      setContentSections(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      setError('Could not load content. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    if (!formData.key.trim() || !formData.content.trim()) {
      setError('Key and content fields cannot be empty.');
      return;
    }
    
    try {
      let response;
      
      if (editMode && formData.id) {
        response = await supabase
          .from('site_content')
          .update({ 
            content: formData.content,
            updated_at: new Date()
          })
          .eq('id', formData.id);
      } else {
        response = await supabase
          .from('site_content')
          .insert([{ 
            section: activeSection, 
            key: formData.key, 
            content: formData.content 
          }]);
      }
      
      if (response.error) throw response.error;
      
      setSuccess(editMode ? 'Content updated successfully!' : 'Content created successfully!');
      fetchContent();
      resetForm();
    } catch (error) {
      console.error('Error saving content:', error);
      setError('Error saving content. The key might already exist for this section.');
    }
  };
  
  const handleEditContent = (content) => {
    setFormData({
      id: content.id,
      section: content.section,
      key: content.key,
      content: content.content
    });
    setEditMode(true);
  };
  
  const handleDeleteContent = async (id) => {
    if (!confirm('Are you sure you want to delete this content?')) return;
    
    try {
      const { error } = await supabase
        .from('site_content')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setSuccess('Content deleted successfully!');
      fetchContent();
    } catch (error) {
      console.error('Error deleting content:', error);
      setError('Error deleting content.');
    }
  };
  
  const resetForm = () => {
    setFormData({
      id: null,
      section: activeSection,
      key: '',
      content: ''
    });
    setEditMode(false);
  };
  
  return (
    <AdminLayout>
      <div className="admin-content">
        <div className="admin-header">
          <h1>Content Management</h1>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <div className="section-tabs">
          {sectionOptions.map(section => (
            <button
              key={section.value}
              className={activeSection === section.value ? 'tab-active' : ''}
              onClick={() => {
                setActiveSection(section.value);
                resetForm();
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        <div className="content-management">
          <div className="content-form-container">
            <h2>{editMode ? 'Edit Content' : 'Add New Content'}</h2>
            <form onSubmit={handleSubmit} className="content-form">
              <div className="form-group">
                <label htmlFor="section">Section</label>
                <input
                  type="text"
                  id="section"
                  value={activeSection}
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="key">Content Key</label>
                <input
                  type="text"
                  id="key"
                  name="key"
                  value={formData.key}
                  onChange={handleInputChange}
                  required
                  disabled={editMode}
                  placeholder="e.g. title, subtitle, description"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="content">Content Value</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Enter content here..."
                ></textarea>
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="primary-button">
                  {editMode ? 'Update Content' : 'Add Content'}
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
          
          <div className="content-list">
            <h2>{sectionOptions.find(s => s.value === activeSection)?.label} Content</h2>
            {loading ? (
              <div className="loading">Loading content...</div>
            ) : contentSections.length === 0 ? (
              <div className="no-content">No content found for this section.</div>
            ) : (
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Content</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contentSections.map((content) => (
                    <tr key={content.id}>
                      <td>{content.key}</td>
                      <td className="content-preview">{content.content}</td>
                      <td>{new Date(content.updated_at).toLocaleDateString()}</td>
                      <td>
                        <div className="content-actions">
                          <button
                            className="edit-button"
                            onClick={() => handleEditContent(content)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteContent(content.id)}
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
        </div>
      </div>
    </AdminLayout>
  );
};

export default Content;
