
import { useState, useEffect } from 'react';
import { INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USERNAME } from './constants.jsx';
import { getMockInstagramPosts } from './mockData.jsx';
import { formatInstagramData } from './formatters.jsx';

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
            const formattedPost = formatInstagramData(post, INSTAGRAM_USERNAME);
            
            // Only apply category filtering if needed
            if (category !== 'all' && formattedPost.category !== category) {
              return null; // This post will be filtered out
            }
            
            return formattedPost;
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

export default useInstagramFeed;
