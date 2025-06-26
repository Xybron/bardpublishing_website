export const useGalleryStore = defineStore('galleryStore', {
  state: () => ({
    images : [
        {
        id: 1,
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=600&fit=crop',
        title: 'Organic Farm Landscape',
        description: 'Beautiful organic farm with sustainable farming practices in rural countryside.',
        category: 'Farm',
        key: 'farm'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=500&fit=crop',
        title: 'Local Farmer Portrait',
        description: 'Portrait of a dedicated local farmer working in the fields.',
        category: 'Farmers',
        key: 'farmers'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=700&fit=crop',
        title: 'Women in Agriculture',
        description: 'Empowering women through agricultural training and support programs.',
        category: 'Women empowerment',
        key: 'women-empowerment'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=550&fit=crop',
        title: 'Smart Farming Technology',
        description: 'IoT sensors and smart irrigation systems transforming modern agriculture.',
        category: 'Tech',
        key: 'tech'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=600&fit=crop',
        title: 'Sustainable Packaging',
        description: 'Eco-friendly packaging solutions for fresh produce and agricultural products.',
        category: 'Packaging',
        key: 'packaging'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=650&fit=crop',
        title: 'Farm Partnership Meeting',
        description: 'Building strong partnerships between farmers and local businesses.',
        category: 'Partnerships',
        key: 'partnerships'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=500&fit=crop',
        title: 'Fresh Organic Vegetables',
        description: 'Colorful array of fresh, organic vegetables straight from the farm.',
        category: 'Food',
        key: 'food'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=700&fit=crop',
        title: 'Community Garden Project',
        description: 'Local community coming together to build and maintain a shared garden space.',
        category: 'Community',
        key: 'community'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=600&fit=crop',
        title: 'Agricultural Conference',
        description: 'Annual agricultural conference bringing together farmers, experts, and innovators.',
        category: 'Events',
        key: 'events'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=550&fit=crop',
        title: 'Greenhouse Technology',
        description: 'Modern greenhouse facilities with climate control and automation systems.',
        category: 'Tech',
        key: 'tech'
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=650&fit=crop',
        title: 'Sunrise Over Farmland',
        description: 'Golden sunrise illuminating vast farmland and crops ready for harvest.',
        category: 'Farm',
        key: 'farm'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=500&fit=crop',
        title: 'Farm Fresh Produce',
        description: 'Variety of fresh fruits and vegetables displayed at the local farmers market.',
        category: 'Food',
        key: 'food'
    }
    ]
  }),
 
})
