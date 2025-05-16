import { useState, useEffect } from 'react';

// Instagram Basic Display API integration
// Note: This needs to be configured with your own Instagram app

// Instagram API settings
// Replace these with your actual Instagram app credentials
const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID || 'YOUR_INSTAGRAM_APP_ID';
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET || 'YOUR_INSTAGRAM_APP_SECRET';
const INSTAGRAM_USERNAME = 'sihanas_cake';

// You'll need to generate a long-lived access token and place it here
// This token should be stored securely (ideally on your backend)
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || 'YOUR_INSTAGRAM_ACCESS_TOKEN';

// Main hook for fetching Instagram posts
export const useInstagramFeed = (limit = 12, category = 'all') => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Check if we have a valid access token
        if (!INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN === 'YOUR_INSTAGRAM_ACCESS_TOKEN') {
          console.warn('Instagram access token not configured. Using mock data instead.');
          const mockPosts = getMockInstagramPosts();
          
          // Filter posts if category is specified
          const filteredPosts = category === 'all' 
            ? mockPosts 
            : mockPosts.filter(post => post.category === category);
          
          // Add isNew flag for posts less than 24 hours old
          const postsWithNewFlag = filteredPosts.map(post => {
            const postDate = new Date(post.timestamp);
            const now = new Date();
            const hoursDiff = (now - postDate) / (1000 * 60 * 60);
            return {
              ...post,
              isNew: hoursDiff < 24
            };
          });
          
          setPosts(postsWithNewFlag.slice(0, limit));
          setLoading(false);
          return;
        }
        
        // Real Instagram API call
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${limit}`
        );
        
        if (!response.ok) {
          throw new Error(`Instagram API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.data) {
          throw new Error('Invalid response from Instagram API');
        }
        
        // Transform Instagram API response to match our app's data structure
        const instagramPosts = data.data
          .filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
          .map(post => {
            const timestamp = new Date(post.timestamp);
            const now = new Date();
            const hoursDiff = (now - timestamp) / (1000 * 60 * 60);
            const daysDiff = hoursDiff / 24;
            
            // Generate a mock like count since Instagram API doesn't provide this
            const likes = Math.floor(Math.random() * 500) + 50;
            
            let categoryTag = 'specialty'; // Default category
            
            // Attempt to determine category based on caption text
            const caption = post.caption || '';
            if (caption.toLowerCase().includes('wedding')) categoryTag = 'wedding';
            if (caption.toLowerCase().includes('birthday')) categoryTag = 'birthday';
            if (caption.toLowerCase().includes('chocolate')) categoryTag = 'chocolate';
            if (caption.toLowerCase().includes('fruit')) categoryTag = 'fruit';
            
            // Only apply category filtering if needed
            if (category !== 'all' && categoryTag !== category) {
              return null; // This post will be filtered out
            }
            
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
              username: INSTAGRAM_USERNAME,
              timestamp: post.timestamp,
              category: categoryTag,
              postedDate: postedDate,
              isNew: hoursDiff < 24
            };
          })
          .filter(Boolean); // Remove null entries (filtered by category)
        
        setPosts(instagramPosts.slice(0, limit));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError("Failed to load Instagram posts. Using mock data instead.");
        
        // Fallback to mock data
        const mockPosts = getMockInstagramPosts();
        const filteredPosts = category === 'all' 
          ? mockPosts 
          : mockPosts.filter(post => post.category === category);
        
        setPosts(filteredPosts.slice(0, limit));
        setLoading(false);
      }
    };
    
    fetchInstagramPosts();
  }, [limit, category]);
  
  return { posts, loading, error };
};

// For featured posts - returns posts with highest engagement
export const useFeaturedInstagramPosts = (limit = 4) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        
        // Check if we have a valid access token
        if (!INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN === 'YOUR_INSTAGRAM_ACCESS_TOKEN') {
          console.warn('Instagram access token not configured. Using mock data instead.');
          const mockPosts = getMockInstagramPosts();
          
          // Sort by engagement (likes + comments) and filter for last 90 days
          const ninetyDaysAgo = new Date();
          ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
          
          const featuredPosts = mockPosts
            .filter(post => new Date(post.timestamp) >= ninetyDaysAgo)
            .sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments))
            .slice(0, limit);
            
          setPosts(featuredPosts);
          setLoading(false);
          return;
        }
        
        // Real Instagram API call
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=50`
        );
        
        if (!response.ok) {
          throw new Error(`Instagram API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform and filter Instagram posts
        const allPosts = data.data
          .filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
          .map(post => {
            // Generate mock engagement metrics
            const likes = Math.floor(Math.random() * 500) + 50;
            
            return {
              id: post.id,
              caption: post.caption || 'No caption',
              image: post.media_url,
              permalink: post.permalink,
              likes: likes,
              comments: Math.floor(likes / 10),
              username: INSTAGRAM_USERNAME,
              timestamp: post.timestamp,
              postedDate: formatPostedDate(new Date(post.timestamp))
            };
          });
        
        // Sort by highest engagement and get the top ones
        const featuredPosts = allPosts
          .sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments))
          .slice(0, limit);
        
        setPosts(featuredPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching featured Instagram posts:", err);
        setError("Failed to load featured posts. Using mock data instead.");
        
        // Fallback to mock data
        const mockPosts = getMockInstagramPosts();
        const featuredPosts = mockPosts
          .sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments))
          .slice(0, limit);
        
        setPosts(featuredPosts);
        setLoading(false);
      }
    };
    
    fetchFeaturedPosts();
  }, [limit]);
  
  return { posts, loading, error };
};

// Helper function to format posted date
const formatPostedDate = (timestamp) => {
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

// Mock data generator function - will be used as fallback if API fails or during development
const getMockInstagramPosts = () => {
  const now = new Date();
  
  // Function to create dates in the past
  const daysAgo = (days) => {
    const date = new Date(now);
    date.setDate(date.getDate() - days);
    return date.toISOString();
  };
  
  // Function to create hours ago
  const hoursAgo = (hours) => {
    const date = new Date(now);
    date.setHours(date.getHours() - hours);
    return date.toISOString();
  };
  
  return [
    {
      id: 1,
      caption: 'Chocolate Delight - Rich chocolate cake with creamy ganache and chocolate shavings.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 253,
      comments: 45,
      username: 'sihanas_cake',
      timestamp: daysAgo(2),
      category: 'chocolate',
      postedDate: '2 days ago'
    },
    {
      id: 2,
      caption: 'Wedding Special - Elegant three-tier cake for the perfect celebration.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 456,
      comments: 67,
      username: 'sihanas_cake',
      timestamp: daysAgo(7),
      category: 'wedding',
      postedDate: '1 week ago'
    },
    {
      id: 3,
      caption: 'Strawberry Dream - Light vanilla sponge with fresh strawberries and cream.',
      image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 378,
      comments: 42,
      username: 'sihanas_cake',
      timestamp: daysAgo(3),
      category: 'fruit',
      postedDate: '3 days ago'
    },
    {
      id: 4,
      caption: 'Birthday Celebration - Colorful sprinkle cake perfect for any birthday party.',
      image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 324,
      comments: 38,
      username: 'sihanas_cake',
      timestamp: daysAgo(5),
      category: 'birthday',
      postedDate: '5 days ago'
    },
    {
      id: 5,
      caption: 'Vanilla Bliss - Classic vanilla cake with buttercream frosting and sprinkles.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 301,
      comments: 29,
      username: 'sihanas_cake',
      timestamp: daysAgo(1),
      category: 'vanilla',
      postedDate: '1 day ago'
    },
    {
      id: 6,
      caption: 'Red Velvet - Classic red velvet with cream cheese frosting.',
      image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 489,
      comments: 53,
      username: 'sihanas_cake',
      timestamp: daysAgo(6),
      category: 'specialty',
      postedDate: '6 days ago'
    },
    {
      id: 7,
      caption: 'Cupcake Collection - Perfect mini treats for any occasion.',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 367,
      comments: 41,
      username: 'sihanas_cake',
      timestamp: daysAgo(4),
      category: 'cupcakes',
      postedDate: '4 days ago'
    },
    {
      id: 8,
      caption: 'Anniversary Special - Elegant cake to celebrate your special day.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 412,
      comments: 47,
      username: 'sihanas_cake',
      timestamp: daysAgo(14),
      category: 'anniversary',
      postedDate: '2 weeks ago'
    },
    {
      id: 9,
      caption: 'Special holiday-themed cake - just baked this morning!',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 127,
      comments: 18,
      username: 'sihanas_cake',
      timestamp: hoursAgo(5),
      category: 'specialty',
      postedDate: '5 hours ago'
    },
    {
      id: 10,
      caption: 'Just finished this mint chocolate masterpiece!',
      image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 89,
      comments: 12,
      username: 'sihanas_cake',
      timestamp: hoursAgo(2),
      category: 'chocolate',
      postedDate: '2 hours ago'
    }
  ];
};

export default useInstagramFeed;
