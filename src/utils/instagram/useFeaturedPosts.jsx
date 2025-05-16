
import { useState, useEffect } from 'react';
import { INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USERNAME } from './constants.jsx';
import { getMockInstagramPosts } from './mockData.jsx';
import { formatInstagramData } from './formatters.jsx';

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
          .map(post => formatInstagramData(post, INSTAGRAM_USERNAME));
        
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

export default useFeaturedInstagramPosts;
