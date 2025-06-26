export interface Property {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  price: {
    furnished: string;
    unfurnished: string;
  };
  isRental: boolean;
  beds: number;
  baths: number;
  area: number;
  type: string;
  isFurnished: boolean;
  featured: boolean;
  isTopPick?: boolean;
  listedTime: string;
  agent: string;
  views: number;
  agentImage: string;
  description?: string;
  keywords?: string[];
  gallery?: string[];
  amenities?: string[];
  viewer_360?: string;
}

