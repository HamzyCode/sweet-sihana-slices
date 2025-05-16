
// Helper functions for formatting and manipulating Instagram data

// Helper function to format posted date
export const formatPostedDate = (timestamp) => {
  const now = new Date();
  const diffTime = Math.abs(now - timestamp);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 1) {
    const diffHours = Math.round(diffTime / (1000 * 60 * 60));
    return `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const diffWeeks = Math.floor(diffDays / 7);
    return `${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ago`;
  } else {
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  }
};

// Function to determine category based on caption
export const determineCategory = (caption) => {
  if (!caption) return 'specialty'; // Default category
  
  const lowerCaption = caption.toLowerCase();
  if (lowerCaption.includes('wedding')) return 'wedding';
  if (lowerCaption.includes('birthday')) return 'birthday';
  if (lowerCaption.includes('chocolate')) return 'chocolate';
  if (lowerCaption.includes('fruit')) return 'fruit';
  
  return 'specialty';
};

// Format Instagram API data to match app data structure
export const formatInstagramData = (post, username) => {
  const timestamp = new Date(post.timestamp);
  const now = new Date();
  const hoursDiff = (now - timestamp) / (1000 * 60 * 60);
  const daysDiff = hoursDiff / 24;
  
  // Generate a mock like count since Instagram API doesn't provide this
  const likes = Math.floor(Math.random() * 500) + 50;
  
  const categoryTag = determineCategory(post.caption);
  
  // Format the posted date string
  let postedDate;
  if (hoursDiff < 24) {
    postedDate = `${Math.round(hoursDiff)} hours ago`;
  } else if (daysDiff < 7) {
    postedDate = `${Math.round(daysDiff)} days ago`;
  } else if (daysDiff < 30) {
    postedDate = `${Math.round(daysDiff / 7)} weeks ago`;
  } else {
    postedDate = `${Math.round(daysDiff / 30)} months ago`;
  }
  
  return {
    id: post.id,
    caption: post.caption || 'No caption',
    image: post.media_url,
    permalink: post.permalink,
    likes: likes,
    comments: Math.floor(likes / 10), // Approximate number of comments
    username: username,
    timestamp: post.timestamp,
    category: categoryTag,
    postedDate: postedDate,
    isNew: hoursDiff < 24
  };
};
