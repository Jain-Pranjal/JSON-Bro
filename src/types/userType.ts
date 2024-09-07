interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  gender: string;
  phoneNumber: string;
  address: Address;
  jobTitle: string;
  company: string;
  interests: string[];
  isActive: boolean;
  registered: string;  // You can use Date if needed
  about: string;
  social: SocialLinks;
  birthDate: string;  // You can use Date if needed
  username: string;
  password: string;
  bloodGroup: string;
  height: number;  // Height in centimeters
  weight: number;  // Weight in kilograms
}
